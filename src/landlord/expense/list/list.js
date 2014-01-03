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

    '.payExpense click': function(el) {
        console.log('paying expense');
        var expense = el.closest('.expense').model();
        expense.amountPaid = expense.amountTotal;
        expense.paid = true;
        //expense.paidDate = new Date();

        console.log(expense);
        expense.update();
    },
    '.showExpense click':function(el) {
        var expense = el.closest('.expense').model();
        $('#applicationContainer').landlord_expense_show({expense: expense});
    },
    '#createExpenseButton click': function(el) {
        $('#headerMenuContainer').landlord_header_menu({headerDetails:{name:'Create Expense', backUrl:'#!properties'}});
        $('#applicationContainer').landlord_expense_create(this.options);
    },
	"{Landlord.Models.Expense} destroyed" : function(Expense, ev, expense) {
		expense.elements(this.element).remove();
	},
	"{Landlord.Models.Expense} created" : function(Expense, ev, expense){
		this.element.append(this.view('init', [expense]))
	},
	"{Landlord.Models.Expense} updated" : function(Expense, ev, expense){
        console.log('Updating view');
		expense.elements(this.element)
		      .html(this.view('expense', expense) );
	}
});

});