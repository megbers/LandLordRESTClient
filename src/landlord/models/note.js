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
            findAll: "/LandLordWebServices/note/findAll",
            findOne: "/LandLordWebServices/note/find/{id}",

            create: function(params, success, error) {
                $.ajax({
                    url: '/LandLordWebServices/note',
                    type: 'PUT',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(params),
                    success: this.proxy([success]),
                    error: error,
                    fixture: false
                })
            },

            destroy: "/LandLordWebServices/note",
            update : "POST /LandLordWebServices/note"
        },
        /* @Prototype */
        {});

});