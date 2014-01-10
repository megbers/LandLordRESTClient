steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'landlord/models' )
	.then('./views/create_person.ejs', function($){

/**
 * @class Landlord.Person.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates people
 */
$.Controller('Landlord.Person.Create',
/** @Prototype */
{
	init : function(options){
		this.update(options);
	},

    update: function(options) {
        $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:'Create Person',backUrl:'#!person'}});
        this.element.html(this.view('create_person.ejs', {}));
    },

	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...')
		new Landlord.Models.Person(el.formParams()).save(this.callback('saved'));
	},

	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset()
	}
})

});