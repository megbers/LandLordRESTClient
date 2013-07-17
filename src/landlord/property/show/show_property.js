steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    'landlord/models' )
    .then('./views/init.ejs', function($){

        /**
         * @class Landlord.Property.Show
         * @parent index
         * @inherits jQuery.Controller
         * Creates properties
         */
        $.Controller('Landlord.Property.Show',
            /** @Prototype */
            {
                init : function(){
                    this.update();
                },

                update : function(options) {
                    this.options.property = options && options.property ? options.property : this.options.property;
                    this.element.html(this.view('init', this.options.property));
                    $('#propertyExpenseList').landlord_expense_list();
                },

                '#backToPropertyListButton click': function(element, event) {
                    $('#applicationContainer').landlord_property_list();
                }
            })

    });