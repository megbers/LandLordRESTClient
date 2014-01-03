steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models')
    .then( './views/miles_list.ejs',
    './views/miles.ejs',
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
                    $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:'Miles Driven',backUrl:'#!'}});
                    //TODO This needs to be the 'real' property
                    this.options.property = {id: 6}; //options && options.property ? options.property : this.options.property;
                    //Landlord.Models.Miles.findByProperty({propertyId: this.options.property.id}, this.proxy(this.showMiles));
                     this.showMiles(Landlord.Models.Miles.findAll(), this.options.property);
                },
                showMiles: function(milesList, property) {
                    this.element.html(this.view('miles_list.ejs', milesList));
                    setTimeout(function() {
                        $('.graph').landlord_miles_graph({milesList: $.parseJSON(milesList.responseText), property: property});
                    }, 1000);

                },
                '.destroyMiles click': function( el ){
                    console.log('deleting miles');
                    if(confirm("Are you sure you want to destroy?")){
                        el.closest('.miles').model().destroy();
                    }
                },
                '.miles click':function(el) {
                    var miles = el.closest('.miles').model();
                    $('#applicationContainer').landlord_miles_show({miles: miles});
                },
                '#createMilesButton click': function(el) {
                    window.location.hash = '#!miles/add';
                    $('#applicationContainer').landlord_miles_create(this.options);
                },
                "{Landlord.Models.Miles} destroyed" : function(Expense, ev, miles) {
                    miles.elements(this.element).remove();
                },
                "{Landlord.Models.Miles} created" : function(Expense, ev, miles){
                    this.element.append(this.view('miles_list.ejs', [miles]))
                },
                "{Landlord.Models.Miles} updated" : function(Expense, ev, miles){
                    console.log('Updating view');
                    miles.elements(this.element)
                        .html(this.view('miles', miles) );
                }
            });

    });