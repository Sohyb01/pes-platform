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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { exampleClasses, exampleSessions } from "@/lib/data";
import { format } from "date-fns";
import { getNameById } from "@/lib/getNameById";

const FormAddMaterial = ({
  editObj,
}: {
  editObj?: TFormSchemaAddMaterial | undefined;
}) => {
  const { toast } = useToast();

  const defaultValues = editObj
    ? editObj
    : {
        id: "",
        attachment: undefined,
        session_id: "",
        class_field: "",
        instructor_id: "instructor1",
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
          name="name"
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
          name="session_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Session</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select session" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {exampleSessions.map((session) => {
                    return (
                      <SelectItem
                        key={session.sessionid}
                        value={session.sessionid}
                      >
                        {session.name}{" "}
                        <span className="text-muted-foreground">
                          {format(session.playback_start_time, "MMMM dd")}
                        </span>
                        <span className="block text-muted-foreground">
                          {getNameById(session.class_id, "Class")}
                        </span>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
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
                    <SelectValue placeholder="Select an option" />
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
        <Button type="submit" className="md:col-span-2">
          {editObj ? "Save changes" : "Add material"}
        </Button>
      </form>
    </Form>
  );
};

export default FormAddMaterial;
