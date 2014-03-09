steal('jquery/model', function(){

    /**
     * @class Landlord.Models.Miles
     * @parent index
     * @inherits jQuery.Model
     * Wraps backend person services.
     */
    $.Model('Landlord.Models.Miles',
        /* @Static */
        {
            findAll: hostUrl + "/LandLordWebServices/miles/findAll",
            findOne: hostUrl + "/LandLordWebServices/miles/find/{id}",

            create: function(params, success, error) {
                $.ajax({
                    url: hostUrl + '/LandLordWebServices/miles',
                    type: 'PUT',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(params),
                    success: this.proxy([success]),
                    error: error,
                    fixture: false
                })
            },

            destroy: hostUrl + "/LandLordWebServices/miles",
            update : "POST " + hostUrl + "/LandLordWebServices/miles"
        },
        /* @Prototype */
        {});

});