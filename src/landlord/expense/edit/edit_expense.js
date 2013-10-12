steal('jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    'landlord/models')
    .then('./views/init.ejs', function($){

        /**
         * @class Landlord.Expense.Edit
         * @parent index
         * @inherits jQuery.Controller
         * Creates properties
         */
        $.Controller('Landlord.Expense.Edit',
            /** @Prototype */
            {
                init : function(){
                    this.update();
                },

                update : function(options) {
                    this.options.expense = options && options.expense ? options.expense : this.options.expense;
                    this.element.html(this.view('init', this.options.expense));
                },

                '#editExpense click' : function(element, event) {
                    var expense = element.closest('form').formParams();
                    console.log('Edit Expense Clicked: ', expense);
                },

                '#cancelEditExpense click' : function(element, event) {
                    $('#applicationContainer').landlord_expense_show({expense: this.options.expense});
                }

            })

    });