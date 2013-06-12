steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'landlord/models' )
.then( './views/init.ejs', 
       './views/property.ejs', 
       function($){

/**
 * @class Landlord.Property.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists properties and lets you destroy them.
 */
$.Controller('Landlord.Property.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',Landlord.Models.Property.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.property').model().destroy();
		}
	},
	"{Landlord.Models.Property} destroyed" : function(Property, ev, property) {
		property.elements(this.element).remove();
	},
	"{Landlord.Models.Property} created" : function(Property, ev, property){
		this.element.append(this.view('init', [property]))
	},
	"{Landlord.Models.Property} updated" : function(Property, ev, property){
		property.elements(this.element)
		      .html(this.view('property', property) );
	}
});

});