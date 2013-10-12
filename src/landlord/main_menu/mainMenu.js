steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models',
    'landlord/property/list')
    .then( './views/init.ejs',
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
                    this._updateHeader('Main Menu', 'main');
                    this.element.html(this.view('init') )
                },
                '.importExportButton click':function(el) {
                    console.log('importExportButton');
                },
                '.propertySummaryButton click':function(el) {
                    this._updateHeader('Property Summary', 'main');
                    $('#applicationContainer').landlord_property_list();
                },
                '.financialSummaryButton click':function(el) {
                    console.log('financialSummaryButton');
                },
                '.milesButton click':function(el) {
                    console.log('milesButton');
                },
                '.rentalsAvailableButton click':function(el) {
                    console.log('rentalsAvailableButton');
                },
                '.tenantScreeningButton click':function(el) {
                    console.log('importExportButton');
                },
                '.settingsButton click':function(el) {
                    this._updateHeader('Settings', 'main');
                    $('#applicationContainer').landlord_settings();
                },
                _updateHeader: function(pageTitle, backUrl) {
                    $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:pageTitle,backUrl:backUrl}});
                }

            });

    });