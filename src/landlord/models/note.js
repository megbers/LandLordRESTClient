steal('jquery/model', function(){

    /**
     * @class Landlord.Models.Note
     * @parent index
     * @inherits jQuery.Model
     * Wraps backend note services.
     */
    $.Model('Landlord.Models.Note',
        /* @Static */
        {
            findAll: hostUrl + "/LandLordWebServices/note/findAll",
            findOne: hostUrl + "/LandLordWebServices/note/find/{id}",

            create: function(params, success, error) {
                $.ajax({
                    url: hostUrl + '/LandLordWebServices/note',
                    type: 'PUT',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(params),
                    success: this.proxy([success]),
                    error: error,
                    fixture: false
                })
            },

            destroy: hostUrl + "/LandLordWebServices/note",
            update : "POST " + hostUrl + "/LandLordWebServices/note"
        },
        /* @Prototype */
        {});

});