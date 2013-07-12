steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'landlord/models' )
.then( './views/init.ejs', 
       './views/person.ejs', 
       function($){

/**
 * @class Landlord.Person.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists people and lets you destroy them.
 */
$.Controller('Landlord.Person.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',Landlord.Models.Person.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.person').model().destroy();
		}
	},
	"{Landlord.Models.Person} destroyed" : function(Person, ev, person) {
		person.elements(this.element).remove();
	},
	"{Landlord.Models.Person} created" : function(Person, ev, person){
		this.element.append(this.view('init', [person]))
	},
	"{Landlord.Models.Person} updated" : function(Person, ev, person){
		person.elements(this.element)
		      .html(this.view('person', person) );
	}
});

});