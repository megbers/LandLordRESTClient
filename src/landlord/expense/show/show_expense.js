steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/form_params',
    'jquery/controller/view',
    'landlord/models' )
    .then('./views/init.ejs', function($){

        /**
         * @class Landlord.Expense.Show
         * @parent index
         * @inherits jQuery.Controller
         * Creates properties
         */
        $.Controller('Landlord.Expense.Show',
            /** @Prototype */
            {
                init : function(){
                    this.update();
                },

                update : function(options) {
                    this.options.expense = options && options.expense ? options.expense : this.options.expense;
                    this.element.html(this.view('init', this.options.expense));
                },

                '#backToPropertyButton click': function(element, event) {
                    $('#applicationContainer').landlord_property_show({property: this.options.expense.property});
                },

                '#editExpenseButton click': function(element, event) {
                    $('#applicationContainer').landlord_expense_edit({expense: this.options.expense});
                },

                '#deleteExpenseButton click': function( el ){
                    console.log('deleting expense');
                    if(confirm("Are you sure you want to destroy?")){
                        var property = this.options.expense.property;
                        this.options.expense.destroy();
                        $('#applicationContainer').landlord_property_show({property: property});
                    }
                }
            })

    });