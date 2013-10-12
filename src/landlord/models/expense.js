steal('jquery/model', function(){

/**
 * @class Landlord.Models.Expense
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend expense services.  
 */
$.Model('Landlord.Models.Expense',
/* @Static */
{
    findAll: "/LandLordWebServices/expense/findAll",
    findOne: "/LandLordWebServices/expense/find/{id}",

    findByProperty: function(params, success, error) {
        $.ajax({
            url: '/LandLordWebServices/expense/findByProperty/' + params.propertyId,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: function(expenses) {
                var expensesArray = [];
                for(var i=0; i < expenses.length; i++) {
                    expensesArray.push(new Landlord.Models.Expense(expenses[i]));
                }
                success(expensesArray);
            },
            error: error,
            fixture: false
        });
    },

    create: function(params, success, error) {
        $.ajax({
            url: '/LandLordWebServices/expense',
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(params),
            success: this.proxy([success]),
            error: error,
            fixture: false
        });
    },

    destroy: "/LandLordWebServices/expense",
    update: "POST /LandLordWebServices/expense"
},
/* @Prototype */
{});

})