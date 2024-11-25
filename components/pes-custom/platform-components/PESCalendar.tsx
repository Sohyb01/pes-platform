"use client";

import { useNextCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";

import { useEffect } from "react";
import CustomEventModal from "./CustomEventModal";
// import { useEffect } from "react";

function PESCalendar() {
  const plugins = [createEventsServicePlugin(), createEventModalPlugin()];

  const calendar = useNextCalendarApp(
    {
      views: [
        createViewDay(),
        createViewWeek(),
        createViewMonthGrid(),
        createViewMonthAgenda(),
      ],
      events: [
        {
          id: "1",
          title: "Event 1",
          start: "2024-11-24 00:00",
          end: "2024-11-24 05:00",
        },
      ],
    },
    plugins
  );

  useEffect(() => {
    // get all events
    calendar ? calendar.events.getAll() : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      <ScheduleXCalendar
        calendarApp={calendar}
        customComponents={{
          eventModal: CustomEventModal,
        }}
      />
    </div>
  );
}

export default PESCalendar;
