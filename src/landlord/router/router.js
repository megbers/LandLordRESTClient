steal( 'jquery/controller',
    'jquery/controller/route')
    .then(
    function($){

        /**
         * @class Landlord.Router
         * @parent index
         * @inherits jQuery.Controller
         * Creates the Router
         */
        $.Controller('Landlord.Router',
            /** @Static */
            {
                defaults : {}
            },
            /** @Prototype */
            {
                init : function(){},
                update:function(options) {},

                'settings route' : function(data) {
                    $('#applicationContainer').landlord_settings();
                },

                'miles route' : function() {
                    $('#applicationContainer').landlord_miles_list();
                },

                'property/add route' : function() {
                    console.log('property/add');
                },

                'property/show/:id route' : function(data) {
                    console.log('property/show/' + data.id);
                },

                'property/edit/:id route' : function(data) {
                    console.log('property/edit/' + data.id);
                },

                'properties route' : function() {
                    $('#applicationContainer').landlord_property_list();
                },

                'tenant route' : function(data) {
                    $('#applicationContainer').landlord_tenant_screening();
                },

                'route' : function() {
                    $('#applicationContainer').landlord_main_menu();
                }

            });

    });