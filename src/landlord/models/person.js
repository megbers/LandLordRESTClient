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
    findAll: hostUrl + "/LandLordWebServices/person/findAll",
    findOne: hostUrl + "/LandLordWebServices/person/find/{id}",

    findByProperty: function(params, success, error) {
        $.ajax({
            url: hostUrl + '/LandLordWebServices/person/findByProperty/' + params.propertyId,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: function(persons) {
                var personArray = [];
                for(var i=0; i < persons.length; i++) {
                    personArray.push(new Landlord.Models.Person(persons[i]));
                }
                success(personArray);
            },
            error: error,
            fixture: false
        });
    },

    create: function(params, success, error) {
        $.ajax({
            url: hostUrl + '/LandLordWebServices/person',
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(params),
            success: this.proxy([success]),
            error: error,
            fixture: false
        })
    },

    destroy: hostUrl + "/LandLordWebServices/person",
    update : hostUrl + "/LandLordWebServices/person"
},
/* @Prototype */
{});

})