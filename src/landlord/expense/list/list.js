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
        this.update();
	},
    update: function(options) {
        this.options.property = options && options.property ? options.property : this.options.property;
        Landlord.Models.Expense.findByProperty({propertyId: this.options.property.id}, this.proxy(this.showExpenses));
    },
    showExpenses: function(expenses) {
        //TODO Remove the logic from the EJS and move it here...
        this.element.html(this.view('init', expenses));
    },
	'.destroyExpense click': function( el ){
        console.log('deleting expense');
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.expense').model().destroy();
		}
	},
    '#createExpenseButton click': function(el) {
        $('#applicationContainer').landlord_expense_create(this.options);
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