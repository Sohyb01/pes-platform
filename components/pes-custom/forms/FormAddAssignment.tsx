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
  FormSchemaAddAssignment,
  TFormSchemaAddAssignment,
} from "@/lib/types-forms";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { CalendarDropdown } from "@/components/ui/calendar-dropdown";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { exampleClasses } from "@/lib/data";

const FormAddAssignment = ({
  editObj,
}: {
  editObj?: TFormSchemaAddAssignment | undefined;
}) => {
  const { toast } = useToast();

  const defaultValues = editObj
    ? editObj
    : {
        assignment_url: "",
        assignment_duedate: undefined,
        assignment_attachment: null,
        assignment_description: "",
        subject_id: "",
        class_id: "",
      };
  // 1. Define your form.

  const form = useForm<TFormSchemaAddAssignment>({
    resolver: zodResolver(FormSchemaAddAssignment),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaAddAssignment) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Class added successfully!",
    });
    form.reset(defaultValues);
  };

  const cvRef = form.register("assignment_attachment");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        <FormField
          control={form.control}
          name="assignment_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assignment URL</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="assignment_duedate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      size={"input"}
                      className={cn(
                        "pl-3 text-left font-normal w-full",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <div>Pick a date</div>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  side="bottom"
                  className="w-auto p-0"
                  align="start"
                >
                  <CalendarDropdown
                    mode="single"
                    captionLayout="dropdown-buttons"
                    fromYear={2020}
                    toYear={new Date().getFullYear()}
                    defaultMonth={new Date()}
                    selected={field.value}
                    disabled={(date) =>
                      date > new Date() || date < new Date("2020-01-01")
                    }
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="assignment_attachment"
          render={() => (
            <FormItem>
              <FormLabel>Attachment</FormLabel>
              <FormControl>
                <Input type="file" className="file-upload" {...cvRef} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="assignment_description"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel>Assignment description</FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Subject A">Subject A</SelectItem>
                  <SelectItem value="Subject B">Subject B</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="class_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class ID</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {exampleClasses.map((pesClass, idx) => {
                    return (
                      <SelectItem key={idx} value={pesClass.class_name}>
                        {pesClass.class_name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="md:col-span-2">
          {editObj ? "Save changes" : "Add class"}
        </Button>
      </form>
    </Form>
  );
};

export default FormAddAssignment;
