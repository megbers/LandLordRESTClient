steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'landlord/models' )
.then( './views/init.ejs', 
       './views/expense.ejs', 
       function($){

/**
 * @class Landlord.Expense.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists expenses and lets you destroy them.
 */
$.Controller('Landlord.Expense.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',Landlord.Models.Expense.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.expense').model().destroy();
		}
	},
	"{Landlord.Models.Expense} destroyed" : function(Expense, ev, expense) {
		expense.elements(this.element).remove();
	},
	"{Landlord.Models.Expense} created" : function(Expense, ev, expense){
		this.element.append(this.view('init', [expense]))
	},
	"{Landlord.Models.Expense} updated" : function(Expense, ev, expense){
		expense.elements(this.element)
		      .html(this.view('expense', expense) );
	}
});

});