steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models',
    'landlord/miles/miles.css')
.then(
    './views/miles_list.ejs',
    './views/miles.ejs',
function($){

    /**
     * @class Landlord.Miles.List.Property
     * @parent index
     * @inherits jQuery.Controller
     * Lists expenses and lets you destroy them.
     */
    $.Controller('Landlord.Miles.list.Property',
        /** @Static */
        {
            defaults : {}
        },
        /** @Prototype */
        {
            init : function(options){
                this.update(options);
            },

            update: function(options) {
                $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:'Miles For Property',backUrl:'#!miles'}});

                this.options.property = options && options.property ? options.property : this.options.property;
                this.options.milesList = options && options.milesList ? options.milesList : this.options.milesList;

                this.element.html(this.view('//landlord/miles/mileslist/views/miles_list.ejs', {milesList: this.options.milesList, property: this.options.property}));

                var that = this;
                setTimeout(function() {
                    $('.graph' + that.options.property.id).landlord_miles_graph({milesList: $.parseJSON(that.options.milesList.responseText), property: that.options.property});
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
                window.location.hash = '#!miles/' + miles.id;
                $('#applicationContainer').landlord_miles_show({miles: miles});
            },

            '#createMilesButton click': function(el) {
                window.location.hash = '#!miles/add';
                $('#applicationContainer').landlord_miles_create(this.options);
            },

            "{Landlord.Models.Miles} destroyed" : function(Expense, ev, miles) {
                miles.elements(this.element).remove();
            }

//            ,
//
//            "{Landlord.Models.Miles} created" : function(Expense, ev, miles){
//                this.element.append(this.view('miles_list.ejs', [miles]))
//            }
//            ,
//
//            "{Landlord.Models.Miles} updated" : function(Expense, ev, miles){
//                console.log('Updating view');
//                miles.elements(this.element)
//                    .html(this.view('miles', miles) );
//            }
        });

});