steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models')
    .then('./views/init.ejs',
    function($){

        /**
         * @class Landlord.TenantScreening
         * @parent index
         * @inherits jQuery.Controller
         * Creates the header
         */
        $.Controller('Landlord.TenantScreening',
            /** @Static */
            {
                defaults : {}
            },
            /** @Prototype */
            {
                init : function(){
                    this.update();
                },
                update:function(options) {
                    $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:'Tenant Screening',backUrl:'#!main'}});
                    this.element.html(this.view('init', {}) );
                }

            });

    });