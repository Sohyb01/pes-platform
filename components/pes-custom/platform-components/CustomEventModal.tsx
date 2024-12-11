type props = {
  calendarEvent: {
    id: string | number;
    title: string;
    start: string;
    end: string;
  };
};

export default function CustomEventModal({}: props) {
  return (
    <></>
    // <Link
    //   href="#"
    //   className="absolute top-0 left-0 right-0 h-fit bg-shade border-border border-[1px] p-4 flex flex-col items-start text-start text-p_ui rounded-sm"
    // >
    //   <div>{calendarEvent.title}</div>
    //   <div className="text-subtle_medium text-muted-foreground">
    //     {calendarEvent.start} - {calendarEvent.end}
    //   </div>
    // </Link>
  );
}
