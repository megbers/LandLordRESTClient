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

                'miles_list_property/:id route' : function(data) {
                    console.log('miles_list_property/'+data.id);
                },

                'miles/:id route' : function(data) {
                    console.log('miles/' + data.id);
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

                'rentals route' : function(data) {
                    $('#applicationContainer').landlord_rentals_list();
                },

                'properties route' : function() {
                    $('#applicationContainer').landlord_property_list();
                },

                'tenant route' : function(data) {
                    $('#applicationContainer').landlord_tenant_screening();
                },

                'person route' : function(data) {
                    $('#applicationContainer').landlord_person_list();
                },

                'person/add route' : function(data) {
                    $('#applicationContainer').landlord_person_create();
                },

                'login route' : function(data) {
                    $('#applicationContainer').landlord_user_login();
                },

                'main route' : function() {
                    $('#applicationContainer').landlord_main_menu();
                },

                'route' : function() {
                    $('#applicationContainer').landlord_user_login();
                }

            });

    });