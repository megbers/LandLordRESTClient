steal('jquery/model', function(){

/**
 * @class Landlord.Models.Property
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend property services.  
 */
$.Model('Landlord.Models.Property',
/* @Static */
{
    findAll: "/LandLordWebServices/properties/findAll",
    findOne: "/LandLordWebServices/properties/find/{id}",

    create: function(params, success, error) {
        $.ajax({
            url: '/LandLordWebServices/properties',
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(params),
            success: this.proxy([success]),
            error: error,
            fixture: false
        })
    },

    destroy: "/LandLordWebServices/properties",
    update : "/LandLordWebServices/properties"
},
/* @Prototype */
{});

})