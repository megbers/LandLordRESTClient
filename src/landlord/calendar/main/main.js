steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models',
    'jquery/jquery.js')
    .then(
    'fullcalendar/fullcalendar/fullcalendar.min.js',
    'fullcalendar/fullcalendar/fullcalendar.css',
    './views/calendar.ejs',
    './views/note_modal.ejs',
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
                        events: this._convertNotesToEvents(noteList),
                        eventClick: this._handleEventClick,
                        dayClick:this._handleDayClick
                    });
                },

                _handleEventClick: function(calEvent, jsEvent, view) {
                    console.log(calEvent);
                    $('#modal').landlord_modal({
                        //TODO, there has to be a better way to get a reference to the view method on controllers
                        passedInView: $("#calendarContainer").controller().view('//landlord/calendar/main/views/note_modal.ejs', calEvent),
                        ok: function(ev){
                            ev.preventDefault();
                            //ev.resume();
                        }
                    });
                },

                _handleDayClick: function(date, allDay, jsEvent, view ) {
                    console.log(date, allDay, jsEvent, view);
                },

                _convertNotesToEvents: function(noteList) {
                    var events = [];
                    for(var i=0; i<noteList.length; i++) {
                        var parts = noteList[i].date.split('-');
                        //y, m, d
                        var date = new Date(parts[2], parts[0]-1, parts[1]);
                        events[i] = {
                            id: noteList[i].id,
                            title: noteList[i].text,
                            start: date
                        }
                    }
                    return events;
                }
            });

    });