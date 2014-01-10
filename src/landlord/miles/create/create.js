steal( 'jquery/controller',
'jquery/view/ejs',
'jquery/dom/form_params',
'jquery/controller/view',
'landlord/models' )
.then('./views/create_miles.ejs', function($){

    /**
     * @class Landlord.Miles.Create
     * @parent index
     * @inherits jQuery.Controller
     * Creates expenses
     */
    $.Controller('Landlord.Miles.Create',
        /** @Prototype */
        {
            init : function(){
                this.update();
            },

            update: function() {
                $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:'New Miles', backUrl:'#!miles'}});
                var properties = Landlord.Models.Property.findAll();
                this.element.html(this.view('create_miles.ejs', {properties: properties}));
            },

            '#createMiles click': function(el, ev) {
                ev.preventDefault();
                var miles = el.closest('form').formParams();
                miles.property = {id: miles.property, address: $( "#property option:selected" ).text()};
                new Landlord.Models.Miles(miles).save(this.callback('saved'));
            },

            saved : function(miles, returnedMiles){
                $('#applicationContainer').landlord_miles_show({miles: returnedMiles});
            }

        })

});