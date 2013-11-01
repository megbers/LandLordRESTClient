steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'landlord/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Landlord.Property.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates properties
 */
$.Controller('Landlord.Property.Create',
/** @Prototype */
{
	init : function(){
		this.update();
	},

    update: function() {
        this.element.html(this.view('init', Landlord.Models.Person.findAll()));
    },

    '.cancelButton click' : function() {
        $('#applicationContainer').landlord_property_list();
    },

	submit : function(el, ev){
		ev.preventDefault();
		new Landlord.Models.Property(el.formParams()).save(this.callback('saved'));
	},

	saved : function(){
        $('#applicationContainer').landlord_property_list();
	}
})

});