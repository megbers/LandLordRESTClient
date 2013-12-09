steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    'landlord/models')
    .then('./views/init.ejs', function($){

        /**
         * @class Landlord.Miles.Edit
         * @parent index
         * @inherits jQuery.Controller
         * Creates properties
         */
        $.Controller('Landlord.Miles.Edit',
            /** @Prototype */
            {
                init : function(){
                    this.update();
                },

                update : function(options) {
                    this.options.miles = options && options.miles ? options.miles : this.options.miles;
                    this.element.html(this.view('init', this.options.miles));

                    $('#milesType').val(this.options.miles.milesType);
                },

                '#editMiles click' : function(element, event) {
                    var miles = element.closest('form').formParams();
                    console.log('Edit Miles Clicked: ', miles);
                },

                '#cancelEditMiles click' : function(element, event) {
                    $('#applicationContainer').landlord_miles_show({miles: this.options.miles});
                }

            })

    });