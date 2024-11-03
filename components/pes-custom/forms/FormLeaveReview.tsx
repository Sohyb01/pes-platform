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
import { FormSchemaAddReview, TFormSchemaAddReview } from "@/lib/types-forms";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { StarIcon } from "lucide-react";

const FormLeaveReview = () => {
  const { toast } = useToast();

  const defaultValues = {
    rev_fname: "",
    rev_email: "",
    rev_job: "",
    rev_rate: "",
    rev_desc: "",
  };
  // 1. Define your form.

  const form = useForm<TFormSchemaAddReview>({
    resolver: zodResolver(FormSchemaAddReview),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaAddReview) => {
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
          name="rev_fname"
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
        <FormField
          control={form.control}
          name="rev_email"
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
          name="rev_job"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review for</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Job 1">Job 1</SelectItem>
                  <SelectItem value="Job 2">Job 2</SelectItem>
                  <SelectItem value="Job 3">Job 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rev_rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1 Stars">
                    <span className="flex gap-2 items-center">
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                    </span>
                  </SelectItem>
                  <SelectItem value="2 Stars">
                    <span className="flex gap-2 items-center">
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                    </span>
                  </SelectItem>
                  <SelectItem value="3 Stars">
                    <span className="flex gap-2 items-center">
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                    </span>
                  </SelectItem>
                  <SelectItem value="4 Stars">
                    <span className="flex gap-2 items-center">
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                    </span>
                  </SelectItem>
                  <SelectItem value="5 Stars">
                    <span className="flex gap-2 items-center">
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                      <StarIcon
                        className="stroke-yellow-400 fill-yellow-400"
                        size={12}
                      />
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rev_desc"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel>Tell us about your experience</FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="col-span-1 md:col-span-2">
          Submit Review
        </Button>
      </form>
    </Form>
  );
};

export default FormLeaveReview;
