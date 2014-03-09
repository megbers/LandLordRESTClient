steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'landlord/models' )
.then( './views/person_list.ejs',
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
        $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:'Manage People',backUrl:'#!main'}});

        this.options.property = options && options.property ? options.property : this.options.property;
        if(!this.options.property) {
            this.element.html(this.view('person_list.ejs',Landlord.Models.Person.findAll()));
        } else {
            Landlord.Models.Person.findByProperty({propertyId: this.options.property.id}, this.proxy(this.showPeople));
        }
    },

    showPeople: function(people) {
        this.element.html(this.view('person_list.ejs', people));
    },

	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.person').model().destroy();
		}
	},

    '#createPersonButton click':function(el, ev) {
        window.location.hash = '#!person/add';
        $('#applicationContainer').landlord_person_create();
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