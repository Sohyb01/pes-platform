"use client";

import {
  FormSchemaAddScheduleEvent,
  TFormSchemaAddClass,
  TFormSchemaAddScheduleEvent,
} from "@/lib/types-forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addMinutes, format } from "date-fns";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { TimePicker12Demo } from "@/components/ui/time-picker-12h-demo";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getClasses, getClassStudents } from "@/api/classes";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

interface FormAddEventProps {
  editObj?: Omit<TFormSchemaAddScheduleEvent, "id" | "scheduler_id">;
}

const FormAddScheduleEvent = ({
  editObj = {
    title: "",
    type: "Call Availability",
    start: addMinutes(new Date(), 5),
    end: addMinutes(new Date(), 20),
    people_invited: [],
    description: "",
  },
}: FormAddEventProps) => {
  const form = useForm<TFormSchemaAddScheduleEvent>({
    resolver: zodResolver(FormSchemaAddScheduleEvent),
    defaultValues: {
      ...editObj,
      scheduler_id: "schedule_id_1",
    },
  });

  const { data: classes } = useQuery({
    queryKey: ["classes"],
    queryFn: getClasses,
  });

  const eventType = form.watch("type");
  const startTimestamp = form.watch("start");
  const peopleInvited = form.watch("people_invited");

  const [inviteStep, setInviteStep] = useState(1);
  const [chosenClass, setChosenClass] = useState<
    TFormSchemaAddClass | undefined
  >();

  const { data: chosenClassStudents } = useQuery({
    queryKey: ["chosen-class-students", chosenClass?.id],
    queryFn: () => getClassStudents(chosenClass?.id as string),
  });
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    // Validate people_invited when type changes to Session
    if (eventType === "Session") {
      form.trigger("people_invited");
    }
  }, [eventType, form]);

  useEffect(() => {
    if (eventType === "Call Availability") {
      form.setValue("end", addMinutes(startTimestamp, 15));
    }
  }, [eventType, startTimestamp, form]);

  const onSubmit = (values: TFormSchemaAddScheduleEvent) => {
    console.log(values);
  };

  const renderInviteSteps = (
    step: number,
    field: { value: string[]; onChange: (value: string[]) => void }
  ) => {
    const nextStep = () => {
      setInviteStep((prev) => prev + 1);
    };

    const prevStep = () => {
      setInviteStep((prev) => (prev > 1 ? prev - 1 : prev));
      form.setValue("people_invited", []);
      setSelectAll(false);
    };

    switch (step) {
      case 1: {
        return (
          <div className="space-y-4">
            <h4 className="text-h4">Choose a class</h4>

            <div className="flex flex-col gap-2">
              {classes?.map((_class) => (
                <Button
                  className="group justify-between"
                  variant="ghost"
                  size="sm"
                  key={_class.id}
                  onClick={() => {
                    setChosenClass(_class);
                    nextStep();
                  }}
                >
                  {_class.class_name.length > 25
                    ? `${_class.class_name.slice(0, 24)}...`
                    : _class.class_name}
                  <ChevronRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={24}
                  />
                </Button>
              ))}
            </div>
          </div>
        );
      }

      case 2: {
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <button className="group cursor-pointer" onClick={prevStep}>
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <div>
                <h4 className="text-h4">Invite</h4>
                <p className="text-small leading-none tracking-tight text-muted-foreground">
                  Choose whether you want to invite whole classes or specific
                  students
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={selectAll}
                  onCheckedChange={(checked) => {
                    setSelectAll(!!checked);
                    const selectedPeople = checked
                      ? chosenClassStudents?.map(
                          (student) => student?.student_name as string
                        ) || []
                      : [];
                    field.onChange(selectedPeople);

                    // Trigger validation after change
                    form.trigger("people_invited");
                  }}
                />
                <label>Select All Students</label>
              </div>

              <Separator />

              <div className="space-y-2 ">
                {chosenClassStudents?.map((student) => (
                  <div
                    key={student?.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      checked={field.value?.includes(
                        student?.student_name as string
                      )}
                      disabled={selectAll}
                      onCheckedChange={(checked) => {
                        const currentInvites = field.value || [];
                        if (checked) {
                          field.onChange([
                            ...currentInvites,
                            student?.student_name as string,
                          ]);
                        } else {
                          field.onChange(
                            currentInvites.filter(
                              (name) =>
                                name !== (student?.student_name as string)
                            )
                          );

                          setSelectAll(false);
                        }

                        // Trigger validation after change
                        form.trigger("people_invited");
                      }}
                    />
                    <label>{student?.student_name}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Add validation message for Session type */}
            {eventType === "Session" && peopleInvited?.length === 0 && (
              <p className="text-sm text-destructive">
                Sessions must include at least one invitee
              </p>
            )}
          </div>
        );
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        {/* Event Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Event Type */}
        <FormField
          control={form.control}
          name="type"
          render={({ field: { onChange, value } }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={onChange} defaultValue={value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an event type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Call Availability">
                    Call Availability
                  </SelectItem>
                  <SelectItem value="Session">Session</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Event Start Date */}
        <FormField
          control={form.control}
          name="start"
          render={({ field }) => (
            <FormItem className="col-span-2 flex flex-col">
              <FormLabel>Start</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP - hh:mm a")
                      ) : (
                        <span>Start Timestamp</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto flex flex-col items-center p-4"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(value) => {
                      if (eventType === "Call Availability" && value) {
                        form.setValue("end", addMinutes(value, 15));
                      }
                      field.onChange(value);
                    }}
                    disabled={(date) => date < new Date()}
                  />
                  <TimePicker12Demo
                    setDate={(value) => {
                      if (eventType === "Call Availability" && value) {
                        form.setValue("end", addMinutes(value, 15));
                        console.log("dada");
                      }
                      field.onChange(value);
                    }}
                    date={field.value}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Event End Date */}
        <FormField
          control={form.control}
          name="end"
          render={({ field }) => (
            <FormItem className="col-span-2 flex flex-col">
              <FormLabel>End</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                      disabled={eventType === "Call Availability"}
                    >
                      {field.value ? (
                        format(field.value, "PPP - hh:mm a")
                      ) : (
                        <span>End Timestamp</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto flex flex-col items-center p-4"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                  />
                  <TimePicker12Demo
                    setDate={field.onChange}
                    date={field.value}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Select Which Get invited to an event */}
        <FormField
          control={form.control}
          name="people_invited"
          render={({ field }) => (
            <FormItem className="col-span-2 flex flex-col">
              <FormLabel>Invite</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      className="text-muted-foreground justify-start"
                      variant={"outline"}
                    >
                      <User />
                      {Array.isArray(field.value) && field.value.length > 0
                        ? `${field.value.length} Students selected`
                        : "Invite Students"}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start">
                  {renderInviteSteps(inviteStep, {
                    value: field.value || [],
                    onChange: field.onChange,
                  })}
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FormAddScheduleEvent;
