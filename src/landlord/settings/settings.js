steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models')
    .then( './views/init.ejs',
    function($){

        /**
         * @class Landlord.Settings
         * @parent index
         * @inherits jQuery.Controller
         * Creates the settings
         */
        $.Controller('Landlord.Settings',
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
                    this.element.html(this.view('init') )
                }

            });

    });