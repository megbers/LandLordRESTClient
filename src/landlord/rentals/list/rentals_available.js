steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models')
    .then( './views/rentals_available.ejs',
    './views/property.ejs',
    function($){

        /**
         * @class Landlord.Rentals.List
         * @parent index
         * @inherits jQuery.Controller
         */
        $.Controller('Landlord.Rentals.List',
            /** @Static */
            {
                defaults : {}
            },
            /** @Prototype */
            {
                init : function(){
                    this.update();
                },
                update:function() {
                    $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:'Available Properties',backUrl:'#!main'}});
                    this.element.html(this.view('rentals_available.ejs',Landlord.Models.Property.findAll()) );
                }

            });

    });