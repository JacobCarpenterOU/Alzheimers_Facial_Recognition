//= require jquery
//= require moment
//= require fullcalendar
/*
var initialize_calendar;
initialize_calendar = function () {
    $('.calendar').each(function () {
        var calendar = $(this);
        calendar.fullCalendar({
            header: {
                left: 'prev, next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listWeek'
            },
            selectable: true,
            selectHelper: true,
            editable: true,
            navLinks: true,
            eventLimit: true,
            select: function (start, end) {
                $.getScript('../notifications/events/new.js', function () {
                    $('#event_date_range').val(moment(start)).format("MM/DD/YYYY HH:mm") + ' - ' + moment(end).format("MM/DD/YYYY HH:mm");
                    $('.start_hidden').val(moment(start).format('YYYY-MM-DD HH:mm'));
                    $('.end_hidden').val(moment(end).format('YYYY-MM-DD HH:mm'));
                });
                calendar.fullCalendar('unselect');
            }
        });
    })
};
$(document).on('turbolinks:load', initialize_calendar);
*/
var eventlist = {
    events: [
        {
            title: "Aunt Delores' Band Practice",
            start: "2018-11-28"
        }

    ]
};
$(document).ready(function () {
    $.getScript("../lib/moment.js");
    $('#calendar').fullCalendar({
        utc: true,
        titleFormat: 'MMMM',
        textColor: 'black',
        header: {
            left: 'prev, next today New_Event',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        selectable: true,
        selectHelper: true,
        editable: true,
        navLinks: true,
        durationEditable: true,
        eventLimit: true,
        eventSources: [
            {
                url: '../notifications/events/events.json'
            },
            {
                eventlist
            }
        ]

    });



});
$("#calendar").fullCalendar('addEventSource', '../notifications/get-events.php');