steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models')
    .then( './views/init.ejs',
    function($){

        /**
         * @class Landlord.Header
         * @parent index
         * @inherits jQuery.Controller
         * Creates the header
         */
        $.Controller('Landlord.HeaderMenu',
            /** @Static */
            {
                defaults : {}
            },
            /** @Prototype */
            {
                init : function(){
                    this.options.headerDetails = new Landlord.Models.Header();
                    this.update();
                },
                update:function(options) {
                    this.options.headerDetails = options && options.headerDetails ? options.headerDetails : this.options.headerDetails;
                    this.element.html(this.view('init', this.options.headerDetails) );
                },
                '.backButton click': function() {
                    if(this.options.headerDetails.backUrl === 'main') {
                        $('#applicationContainer').landlord_main_menu();
                    }
                },
                '.homeButton click': function() {
                    $('#applicationContainer').landlord_main_menu();
                }

            });

    });