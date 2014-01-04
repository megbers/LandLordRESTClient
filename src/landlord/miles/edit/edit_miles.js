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
                init : function(options){
                    this.update(options);
                },

                update : function(options) {
                    $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:'Edit Miles',backUrl:'#!miles'}});
                    this.options.miles = options && options.miles ? options.miles : this.options.miles;
                    this.element.html(this.view('init', this.options.miles));

                    $('#milesType').val(this.options.miles.milesType);
                },

                '#editMiles click' : function(element, event) {
                    event.preventDefault();
                    var miles = element.closest('form').formParams();
                    var milesOriginal = element.closest('.miles').model();

                    $.extend(milesOriginal, miles);

                    //console.log(miles, milesOriginal, combined);

                    milesOriginal.update();
                },

                '#cancelEditMiles click' : function(element, event) {
                    window.location.hash = '#!miles/' + this.options.miles.id;
                    $('#applicationContainer').landlord_miles_show({miles: this.options.miles});
                }

            })

    });