steal('jquery/model', function(){

/**
 * @class Landlord.Models.Person
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend person services.  
 */
$.Model('Landlord.Models.Person',
/* @Static */
{
    findAll: "/LandLordWebServices/person/findAll",
    findOne: "/LandLordWebServices/person/find/{id}",

    create: function(params, success, error) {
        $.ajax({
            url: '/LandLordWebServices/person',
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(params),
            success: this.proxy([success]),
            error: error,
            fixture: false
        })
    },

    destroy: '/LandLordWebServices/person',
    update : "/LandLordWebServices/person"
},
/* @Prototype */
{});

})