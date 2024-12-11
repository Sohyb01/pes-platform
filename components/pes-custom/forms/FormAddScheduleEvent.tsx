"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormSchemaAddScheduleEvent,
  TFormSchemaAddAdmin,
  TFormSchemaAddEmployee,
  TFormSchemaAddInstructor,
  TFormSchemaAddScheduleEvent,
} from "@/lib/types-forms";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { TimePickerDemo } from "@/components/ui/time-picker-demo";
import { cn } from "@/lib/utils";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { Badge } from "@/components/ui/badge";
import {
  exampleAdmins,
  exampleEmployees,
  exampleInstructors,
} from "@/lib/data";

// Later change this to get an array of objects of {name, id} from backend to display choices of who to add to meeting
// Combined object
const exampleUsers = [
  ...exampleAdmins,
  ...exampleEmployees,
  ...exampleInstructors,
];

const FormAddScheduleEvent = ({
  editObj,
}: {
  editObj?: TFormSchemaAddScheduleEvent | undefined;
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<typeof exampleUsers>([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback(
    (
      person:
        | TFormSchemaAddAdmin
        | TFormSchemaAddEmployee
        | TFormSchemaAddInstructor
    ) => {
      setSelected((prev) => prev.filter((s) => s.id !== person.id));
    },
    []
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    []
  );

  const selectables = exampleUsers.filter((user) => !selected.includes(user));

  const { toast } = useToast();

  const defaultValues = editObj
    ? editObj
    : {
        title: "",
        type: "",
        start: undefined,
        end: undefined,
        people_invited: undefined,
        description: "",
        scheduler_id: "",
      };
  // 1. Define your form.

  const form = useForm<TFormSchemaAddScheduleEvent>({
    resolver: zodResolver(FormSchemaAddScheduleEvent),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaAddScheduleEvent) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Event scheduled successfully!",
    });
    form.reset(defaultValues);
    setSelected([]);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="pes-grid-form px-2 pr-4"
      >
        <p className="text-large col-span-1 md:col-span-2">Schedule Event</p>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Type</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="start"
          render={({ field }) => (
            <FormItem className="flex flex-col mt-auto overflow-hidden">
              <FormLabel className="text-left h-[16.8px]">Start</FormLabel>
              <Popover>
                <FormControl>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left h-10",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP HH:mm:ss")
                      ) : (
                        <span>...</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                </FormControl>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                  <div className="p-3 border-t border-border">
                    <TimePickerDemo
                      setDate={field.onChange}
                      date={field.value}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="end"
          render={({ field }) => (
            <FormItem className="flex flex-col mt-auto overflow-hidden">
              <FormLabel className="text-left h-[16.8px]">End</FormLabel>
              <Popover>
                <FormControl>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left h-10",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP HH:mm:ss")
                      ) : (
                        <span>...</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                </FormControl>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                  <div className="p-3 border-t border-border">
                    <TimePickerDemo
                      setDate={field.onChange}
                      date={field.value}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        {/* Invite people */}
        <Command
          onKeyDown={handleKeyDown}
          className="overflow-visible bg-transparent col-span-1 md:col-span-2 flex flex-col gap-2"
        >
          <p
            className={`${
              form.formState.errors.people_invited
                ? `text-destructive text-subtle_medium`
                : `text-subtle`
            }`}
          >
            Invite People
          </p>
          <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
            <div className="flex flex-wrap gap-1">
              {selected.map((user) => {
                return (
                  <Badge key={user.id} variant="default">
                    {user.employee_name}
                    <button
                      className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleUnselect(user);
                        }
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onClick={() => {
                        handleUnselect(user);

                        // Safely filter out users and map IDs
                        const updatedSelectedIds = selected
                          .filter((s) => s.id && s.id !== user.id) // Exclude the unselected user
                          .map((u) => u.id as string); // Ensure IDs are strings

                        // Update form only if array is non-empty
                        //@ts-expect-error idk
                        form.setValue("people_invited", updatedSelectedIds);
                      }}
                    >
                      <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                    </button>
                  </Badge>
                );
              })}
              <CommandPrimitive.Input
                ref={inputRef}
                value={inputValue}
                onValueChange={setInputValue}
                onBlur={() => setOpen(false)}
                onFocus={() => setOpen(true)}
                placeholder="Invite people..."
                className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>
          <div className="relative mt-2">
            <CommandList>
              {open && selectables.length > 0 ? (
                <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                  <CommandGroup className="h-full overflow-auto">
                    {selectables.map((user) => {
                      return (
                        <CommandItem
                          key={user.id}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onSelect={() => {
                            setInputValue("");

                            // Safely add the selected user
                            const newSelected = [...selected, user];
                            setSelected(newSelected);

                            // Safely map IDs and update form
                            const updatedSelectedIds = newSelected
                              .filter((u) => u.id) // Exclude users without IDs
                              .map((u) => u.id as string); // Ensure IDs are strings

                            // Update form with valid IDs
                            //@ts-expect-error idk
                            form.setValue("people_invited", updatedSelectedIds);
                          }}
                          className={"cursor-pointer"}
                        >
                          {user.employee_name}
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </div>
              ) : null}
            </CommandList>
            <FormMessage>
              {form.formState.errors.people_invited?.message}
            </FormMessage>
          </div>
        </Command>
        {/* Desc */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="md:col-span-2 pt-4 ">
          <Button type="submit" className="">
            {editObj ? "Save changes" : "Add Event"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormAddScheduleEvent;
