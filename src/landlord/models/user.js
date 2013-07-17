steal('jquery/model', function(){

/**
 * @class Landlord.Models.User
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend user services.  
 */
$.Model('Landlord.Models.User',
/* @Static */
{
	findAll: "/LandLordWebServices/users/findAll",
  	findOne: "/LandLordWebServices/users/find/{id}",

    create: function(params, success, error) {
        $.ajax({
            url: '/LandLordWebServices/users',
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(params),
            success: this.proxy([success]),
            error: error,
            fixture: false
        })
    },

    destroy: "/LandLordWebServices/users",
 	update : "/LandLordWebServices/users"
},
/* @Prototype */
{});

})