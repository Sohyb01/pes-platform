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
  FormSchemaAddSchedule,
  TFormSchemaAddSchedule,
} from "@/lib/types-forms";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { exampleClasses, exampleInstructors } from "@/lib/data";

const FormAddSchedule = ({
  editObj,
}: {
  editObj?: TFormSchemaAddSchedule | undefined;
}) => {
  const { toast } = useToast();

  const defaultValues = editObj
    ? editObj
    : {
        id: "",
        schedule_name: "",
        schedule_type: "",
        url: "",
        instructor_id: "",
        class_field: "",
      };
  // 1. Define your form.

  const form = useForm<TFormSchemaAddSchedule>({
    resolver: zodResolver(FormSchemaAddSchedule),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaAddSchedule) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Class added successfully!",
    });
    form.reset(defaultValues);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        <FormField
          control={form.control}
          name="schedule_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="schedule_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instructor_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructor</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select instructor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {exampleInstructors.map((instructor, idx) => {
                    return (
                      <SelectItem key={idx} value={`${instructor.id}`}>
                        {instructor.employee_name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="class_field"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {exampleClasses.map((pesClass, idx) => {
                    return (
                      <SelectItem key={idx} value={`${pesClass.id}`}>
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
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel>Description (optional)</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="md:col-span-2">
          {editObj ? "Save changes" : "Add Schedule"}
        </Button>
      </form>
    </Form>
  );
};

export default FormAddSchedule;
