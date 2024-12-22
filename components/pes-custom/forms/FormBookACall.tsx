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
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchemaBookCall, TFormSchemaBookCall } from "@/lib/types-forms";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { exampleClasses, generateMeetingTimes } from "@/lib/data";
import { redirectOnServer } from "@/lib/common-functions";

const FormBookCall = () => {
  const { toast } = useToast();

  const exampleMeetingTimes = generateMeetingTimes();

  const defaultValues = {
    class_id: undefined,
    call_time: undefined,
    call_reason: "",
    //   Get from authentication later
    instructor_id: "instructor1",
    student_id: "student1",
    parent_id: "parent1",
  };

  const form = useForm<TFormSchemaBookCall>({
    resolver: zodResolver(FormSchemaBookCall),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaBookCall) => {
    console.log(data);
    toast({
      title: "Book called succesfully!",
    });
    redirectOnServer("/dashboard/parent/book-a-call");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="pes-grid-form px-2 pr-4"
      >
        {/* Class Selection */}
        <FormField
          control={form.control}
          name="class_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select class</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {exampleClasses.map((pesClass) => {
                    return (
                      <SelectItem key={pesClass.id} value={pesClass.id!}>
                        {pesClass.class_name}{" "}
                        <span className="text-muted-foreground">
                          {pesClass.class_times}
                        </span>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Call Time Selection */}
        <FormField
          control={form.control}
          name="call_time"
          render={() => (
            <FormItem className="block">
              <FormLabel className="h-[16.8px]">Select call time</FormLabel>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-auto h-10 text-start justify-start block w-full"
                  >
                    {form.getValues("call_time")
                      ? format(
                          new Date(form.getValues("call_time")),
                          "MMMM dd, yyyy hh:mm a"
                        )
                      : "Select call time"}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Select call time</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                    {exampleMeetingTimes.slice(0, 8).map((datetime, idx) => (
                      <Button
                        key={idx}
                        variant={
                          datetime.getTime() ==
                          form.getValues("call_time")?.getTime()
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() => form.setValue("call_time", datetime)}
                      >
                        {format(datetime, "MMMM dd, yyyy hh:mm a")}
                      </Button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Call Reason */}
        <FormField
          control={form.control}
          name="call_reason"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>
                Reason for call{" "}
                <span className="text-muted-foreground">(Optional)</span>
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="pt-4 md:col-span-2">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default FormBookCall;
