steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'landlord/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Landlord.User.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates users
 */
$.Controller('Landlord.User.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...')
		new Landlord.Models.User(el.formParams()).save(this.callback('saved'));
	},
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset()
	}
})

});