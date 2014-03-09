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
    findAll: hostUrl + "/LandLordWebServices/properties/findAll",
    findOne: hostUrl + "/LandLordWebServices/properties/find/{id}",

    create: function(params, success, error) {
        $.ajax({
            url: hostUrl + '/LandLordWebServices/properties',
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(params),
            success: this.proxy([success]),
            error: error,
            fixture: false
        })
    },

    destroy: hostUrl + "/LandLordWebServices/properties",
    update : hostUrl + "/LandLordWebServices/properties"
},
/* @Prototype */
{});

})