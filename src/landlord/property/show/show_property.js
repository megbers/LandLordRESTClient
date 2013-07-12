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
                    console.log('init show property');
                    console.log(this.options.property);
                    this.element.html(this.view('init', this.options.property));
                },

                '.closeButton click': function(element, event) {
                    //TODO GO BACK TO LIST VIEW
                    console.log(element, event);
                }
            })

    });