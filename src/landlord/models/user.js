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
	findAll: hostUrl + "/LandLordWebServices/users/findAll",
  	findOne: hostUrl + "/LandLordWebServices/users/find/{id}",

    create: function(params, success, error) {
        $.ajax({
            url: hostUrl + '/LandLordWebServices/users',
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(params),
            success: this.proxy([success]),
            error: error,
            fixture: false
        });
    },

    destroy: hostUrl + "/LandLordWebServices/users",
 	update : hostUrl + "/LandLordWebServices/users",

    login: function(params, success, error) {
        $.ajax({
            url: hostUrl + '/LandLordWebServices/users/login',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(params),
            success: this.proxy([success]),
            error: error,
            fixture: false
        });
    }
},
/* @Prototype */
{});

})