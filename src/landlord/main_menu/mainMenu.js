steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models',
    'landlord/property/list')
    .then('./mainMenu.css', './views/init.ejs',
    function($){

        /**
         * @class Landlord.MainMenu
         * @parent index
         * @inherits jQuery.Controller
         * Creates the main menu
         */
        $.Controller('Landlord.MainMenu',
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
                    this._updateHeader('Main Menu', '');
                    this.element.html(this.view('init') )
                },
                '.importExportButton click':function(el) {
                    console.log('importExportButton');
                },
//                '.propertySummaryButton click':function(el) {
//                    window.location.hash = "#!properties";
//                    //$('#applicationContainer').landlord_property_list();
//                },
                '.financialSummaryButton click':function(el) {
                    console.log('financialSummaryButton');
                },
//                '.milesButton click':function(el) {
//                    window.location.hash = "#!miles";
//                    //$('#applicationContainer').landlord_miles_list();
//                },
                '.rentalsAvailableButton click':function(el) {
                    console.log('rentalsAvailableButton');
                },
//                '.tenantScreeningButton click':function(el) {
//                    window.location.hash = "#!tenant";
//                    //$('#applicationContainer').landlord_tenant_screening();
//                },
//                '.settingsButton click':function(el) {
//                    window.location.hash = "#!settings";
//                    //$('#applicationContainer').landlord_settings();
//                },
                _updateHeader: function(pageTitle, backUrl) {
                    $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:pageTitle,backUrl:backUrl}});
                }

            });

    });