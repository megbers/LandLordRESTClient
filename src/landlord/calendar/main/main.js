steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models',
    'jquery/jquery.js')
    .then(
    'fullcalendar/fullcalendar/fullcalendar.min.js',
    'fullcalendar/fullcalendar/fullcalendar.css',
    './views/calendar.ejs',
    './views/cell.ejs',
    '../calendar.css',
    function($){

        /**
         * @class Landlord.Calendar.Main
         * @parent index
         * @inherits jQuery.Controller
         * Main Calendar controller for showing events
         */
        $.Controller('Landlord.Calendar.Main',
            /** @Static */
            {
                defaults : {}
            },
            /** @Prototype */
            {
                init : function(){
                    this.update();
                },

                update: function(options) {
                    this.element.html(this.view('calendar.ejs', {}));
                    Landlord.Models.Note.findAll({}, this.proxy(this.createCalendar));
                },

                createCalendar: function(noteList) {


                    $('#calendar').fullCalendar({
                        header: {
                            left: 'prevYear,prev',
                            center: 'title',
                            right: 'next,nextYear' //right: 'month,basicWeek,basicDay'
                        },
                        editable: false,
                        weekMode: 'variable',
                        events: this._convertNotesToEvents(noteList)
                    });
                },

                _convertNotesToEvents: function(noteList) {
                    var events = [];
                    for(var i=0; i<noteList.length; i++) {
                        var parts = noteList[i].date.split('-');
                        //y, m, d
                        var date = new Date(parts[2], parts[0]-1, parts[1]);
                        events[i] = {title: noteList[i].text, start: date}
                    }
                    return events;
                }
            });

    });