steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'landlord/models' )
.then( './views/init.ejs', 
       './views/person.ejs',
       '../person.css',
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
    init : function(options){
        this.update(options);
    },

    update: function(options) {
        this.options.property = options && options.property ? options.property : this.options.property;
        if(!this.options.property) {
            this.element.html(this.view('init',Landlord.Models.Person.findAll()));
        } else {
            Landlord.Models.Person.findByProperty({propertyId: this.options.property.id}, this.proxy(this.showPeople));
        }
    },

    showPeople: function(people) {
        this.element.html(this.view('init', people));
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