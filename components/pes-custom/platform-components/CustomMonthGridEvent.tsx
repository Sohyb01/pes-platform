import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TFormSchemaAddScheduleEvent } from "@/lib/types-forms";
import { format } from "date-fns";
import { usePathname } from "next/navigation";

type props = {
  calendarEvent: TFormSchemaAddScheduleEvent;
};

export default function CustomMonthGridEvent({ calendarEvent }: props) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="p-2 border-l-primary border-l-[2px] bg-primary/10 text-foreground w-full">
          {calendarEvent.title}
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-start gap-4 pt-20">
        <SheetHeader>
          <SheetTitle className="text-h4">{calendarEvent.title}</SheetTitle>
          <SheetDescription>
            <span className="block text-p_ui">
              {format(calendarEvent.start, "MMMM dd, hh:mm a")} -<br />
              {format(calendarEvent.end, "MMMM dd, hh:mm a")}
            </span>
            <span className="block py-8 text-p_ui text-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A natus
              inventore rerum! Dolorem, placeat illo accusamus dignissimos
              suscipit quas reprehenderit magni? Inventore, ut esse.
            </span>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="gap-2">
          <SheetClose asChild>
            {(pathname.split("/").filter(Boolean)[1] == "instructor" ||
              pathname.split("/").filter(Boolean)[1] == "superadmin") && (
              <Button size="sm" variant="destructive">
                Delete Event
              </Button>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
