steal( 'jquery/controller',
'jquery/view/ejs',
'jquery/dom/form_params',
'jquery/controller/view',
'landlord/models' )
.then('./views/init.ejs', function($){

    /**
     * @class Landlord.Miles.Show
     * @parent index
     * @inherits jQuery.Controller
     * Creates properties
     */
    $.Controller('Landlord.Miles.Show',
        /** @Prototype */
        {
            init : function(){
                this.update();
            },

            update : function(options) {
                $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:'Miles Details',backUrl:'miles'}});
                this.options.miles = options && options.miles ? options.miles : this.options.miles;
                this.element.html(this.view('init', this.options.miles));
                $('#propertyExpenseList').landlord_miles_list({miles: this.options.miles});
            },

            '#editMilesButton click': function(element, event) {
                $('#applicationContainer').landlord_miles_edit({miles: this.options.miles});
            },

            '#deleteMilesButton click': function( el ){
                console.log('deleting miles');
                if(confirm("Are you sure you want to destroy?")){
                    var property = this.options.miles.property;
                    this.options.miles.destroy();
                    $('#applicationContainer').landlord_miles_list();
                }
            }

        })

});