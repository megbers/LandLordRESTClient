steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'landlord/models' )
.then( './views/init.ejs', 
       './views/user.ejs', 
       function($){

/**
 * @class Landlord.User.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists users and lets you destroy them.
 */
$.Controller('Landlord.User.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
        var allList = Landlord.Models.User.findAll();
        console.log(allList);
		this.element.html(this.view('init',Landlord.Models.User.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.user').model().destroy();
		}
	},
	"{Landlord.Models.User} destroyed" : function(User, ev, user) {
		user.elements(this.element).remove();
	},
	"{Landlord.Models.User} created" : function(User, ev, user){
		this.element.append(this.view('init', [user]))
	},
	"{Landlord.Models.User} updated" : function(User, ev, user){
		user.elements(this.element)
		      .html(this.view('user', user) );
	}
});

});