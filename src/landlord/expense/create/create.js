steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'landlord/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Landlord.Expense.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates expenses
 */
$.Controller('Landlord.Expense.Create',
/** @Prototype */
{
	init : function(){
		this.update();
	},

    update: function() {
        this.element.html(this.view('init', {}));
    },

    '#expenseType change':function(el, ev) {
        var property = this.options.property;
        var selectedItem = el.val();
        if(selectedItem === '') {

        }

    },

    '#createExpense click': function(el, ev) {
        ev.preventDefault();
        var expense = this._createExpenseObjectFromForm(el);
        new Landlord.Models.Expense(expense).save(this.callback('saved'));
    },

	saved : function(){
        $('#applicationContainer').landlord_property_show({property: this.options.property});
	},

    _createExpenseObjectFromForm: function(el) {
        var expense = el.closest('form').formParams();
        expense.property = this.options.property;
        expense.enteredDate = new Date();
        expense.paid = expense.amountTotal <= expense.amountPaid;
        return expense;
    }
})

});