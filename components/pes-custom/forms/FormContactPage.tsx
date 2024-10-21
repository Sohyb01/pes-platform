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
import { sendEmail } from "@/app/actions/sendEmail";
import { useToast } from "@/components/hooks/use-toast";
import {
  FormSchemaContactForm,
  TFormSchemaContactForm,
} from "@/lib/types-forms";

const ContactPageForm = () => {
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm<TFormSchemaContactForm>({
    resolver: zodResolver(FormSchemaContactForm),
  });

  const onSubmit = async (data: TFormSchemaContactForm) => {
    // handle form submission
    console.log(data);

    const res = await sendEmail(data).then((res) => {
      return res;
    });

    if (res.error) {
      toast({
        title: "An error occurred",
        description:
          "Please try again or contact us through email or whatsapp.",
      });
    } else {
      toast({
        title: "Application Submitted Successfully!",
        description: "We will contact you soon.",
      });
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
      >
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder={form.getValues().firstname} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder={form.getValues().lastname} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile number</FormLabel>
              <FormControl>
                <Input placeholder={form.getValues().mobile} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder={form.getValues().email} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder={form.getValues().country} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder={form.getValues().city} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-auto md:col-span-2">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactPageForm;
