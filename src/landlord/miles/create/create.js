steal( 'jquery/controller',
'jquery/view/ejs',
'jquery/dom/form_params',
'jquery/controller/view',
'landlord/models' )
.then('./views/init.ejs', function($){

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
                $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:'New Miles',backUrl:'miles'}});
                this.element.html(this.view('init', {}));
            },

            '#createMiles click': function(el, ev) {
                ev.preventDefault();
                var miles = el.closest('form').formParams();
                console.log(miles);
                new Landlord.Models.Miles(miles).save(this.callback('saved'));
            },

            saved : function(){
                $('#applicationContainer').landlord_miles_show({property: this.options.property});
            }

        })

});