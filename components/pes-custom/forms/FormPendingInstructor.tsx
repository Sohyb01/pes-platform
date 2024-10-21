"use client";

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

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/hooks/use-toast";
import {
  FormSchemaPendingInstructor,
  TFormSchemaPendingInstructor,
} from "@/lib/types-forms";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const FormPendingInstructor = () => {
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<TFormSchemaPendingInstructor>({
    resolver: zodResolver(FormSchemaPendingInstructor),
  });

  const onSubmit = async (data: TFormSchemaPendingInstructor) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Employee added successfully!",
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        <FormField
          control={form.control}
          name="pinstructor_fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-8">
          <FormField
            control={form.control}
            name="pinstructor_age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pinstructor_gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="pinstructor_nid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>National ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instructor_picture"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Image <span className="text-muted-foreground">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input type="file" className="file-upload" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pinstructor_phonenum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pinstructor_whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Whatsapp number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pinstructor_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pinstructor_cv"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CV</FormLabel>
              <FormControl>
                <Input type="file" className="file-upload" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pinstructor_faculty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Faculty</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pinstructor_major"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Major</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="md:col-span-2">
          <FormField
            control={form.control}
            name="pinstructor_experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Tell us about your previous work experience
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="mt-auto md:col-span-2">
          Submit application
        </Button>
      </form>
    </Form>
  );
};

export default FormPendingInstructor;
