steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models',
    'landlord/miles/miles.css')
    .then(
    './views/property_list.ejs',
    './views/property_miles.ejs',
    function($){

        /**
         * @class Landlord.Miles.List
         * @parent index
         * @inherits jQuery.Controller
         * Lists expenses and lets you destroy them.
         */
        $.Controller('Landlord.Miles.List',
            /** @Static */
            {
                defaults : {}
            },
            /** @Prototype */
            {
                init : function(){
                    this.update();
                },

                update: function(options) {
                    $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:'Miles Driven',backUrl:'#!main'}});

                    this.propertyList = Landlord.Models.Property.findAll();
                    this.milesList = Landlord.Models.Miles.findAll();
                    this.element.html(this.view('property_list.ejs', this.propertyList));

                    //TODO Need to implement findByProperty on the miles model and server.
                    //Landlord.Models.Miles.findByProperty({propertyId: this.options.property.id}, this.proxy(this.showMiles));

                    var that = this;
                    setTimeout(function() {
                        var properties = $.parseJSON(that.propertyList.responseText)
                        for(var i=0; i < properties.length; i++) {
                            var property = properties[i];
                            that.showMiles($.parseJSON(that.milesList.responseText), property);
                        }

                    }, 1000);
                },

                showMiles: function(milesList, property) {
                    $('.graph' + property.id).landlord_miles_graph({milesList: milesList, property: property});
                },

                '#createMilesFromPropertyButton click': function(el) {
                    window.location.hash = '#!miles/add';
                    $('#applicationContainer').landlord_miles_create(this.options);
                },

                '.property click': function(el) {
                    var property = el.closest('.property').model();
                    window.location.hash = '#!miles_list_property/' + property.id;
                    $('#applicationContainer').landlord_miles_list_property({property: property, milesList: this.milesList});
                }

            });

    });