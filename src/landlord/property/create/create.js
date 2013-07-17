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
		this.element.html(this.view('init', Landlord.Models.Person.findAll()));
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...')
		new Landlord.Models.Property(el.formParams()).save(this.callback('saved'));
        $('#applicationContainer').landlord_property_list();
	},
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		//TODO What was this trying to do?
		//this.element[0].reset()
	}
})

});