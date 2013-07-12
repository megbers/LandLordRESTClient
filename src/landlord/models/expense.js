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
	findAll: "/expenses.json",
  	findOne : "/expenses/{id}.json", 
  	create : "/expenses.json",
 	update : "/expenses/{id}.json",
  	destroy : "/expenses/{id}.json"
},
/* @Prototype */
{});

})