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
            findAll: "/LandLordWebServices/miles/findAll",
            findOne: "/LandLordWebServices/miles/find/{id}",

            create: function(params, success, error) {
                $.ajax({
                    url: '/LandLordWebServices/miles',
                    type: 'PUT',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(params),
                    success: this.proxy([success]),
                    error: error,
                    fixture: false
                })
            },

            destroy: "/LandLordWebServices/miles",
            update : "POST /LandLordWebServices/miles"
        },
        /* @Prototype */
        {});

})