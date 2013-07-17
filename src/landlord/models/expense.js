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
            success: this.proxy([success]),
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
    update : "/LandLordWebServices/expense"
},
/* @Prototype */
{});

})