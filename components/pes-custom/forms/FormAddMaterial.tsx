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
  FormSchemaAddMaterial,
  TFormSchemaAddMaterial,
} from "@/lib/types-forms";

const FormAddMaterial = () => {
  const { toast } = useToast();

  const defaultValues = {
    id: "",
    attachment: undefined,
    session_id: "",
    class_field: "",
    instructor_id: "",
  };
  // 1. Define your form.

  const form = useForm<TFormSchemaAddMaterial>({
    resolver: zodResolver(FormSchemaAddMaterial),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaAddMaterial) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Class added successfully!",
    });
    form.reset(defaultValues);
  };

  const attachmentRef = form.register("attachment");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        <FormField
          control={form.control}
          name="attachment"
          render={() => (
            <FormItem>
              <FormLabel>Attachment</FormLabel>
              <FormControl>
                <Input type="file" className="file-upload" {...attachmentRef} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="session_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Session</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
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
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="md:col-span-2">
          Add Material
        </Button>
      </form>
    </Form>
  );
};

export default FormAddMaterial;
