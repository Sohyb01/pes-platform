"use client";

import { useNextCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import {
  // createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  // createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";

import { useEffect } from "react";
import CustomEventModal from "./CustomEventModal";
import CustomMonthGridEvent from "./CustomMonthGridEvent";
import { exampleScheduleEvents } from "@/lib/data";
// import { useEffect } from "react";

function PESCalendar() {
  const plugins = [createEventsServicePlugin(), createEventModalPlugin()];

  const calendar = useNextCalendarApp(
    {
      views: [createViewMonthGrid(), createViewMonthAgenda()],
      events: exampleScheduleEvents,
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
          monthGridEvent: CustomMonthGridEvent,
        }}
      />
    </div>
  );
}

export default PESCalendar;
