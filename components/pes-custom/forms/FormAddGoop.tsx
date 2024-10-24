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
  FormSchemaAddInstructor,
  TFormSchemaAddInstructor,
} from "@/lib/types-forms";
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
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

const FormAddGoop = () => {
  const { toast } = useToast();

  const defaultValues = {};
  // 1. Define your form.

  const form = useForm<TFormSchemaAddGoop>({
    resolver: zodResolver(FormSchemaAddGoop),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaAddGoop) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Goop added successfully!",
    });
    form.reset(defaultValues);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        {/* String */}
        <FormField
          control={form.control}
          name="applicant_name"
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
        {/* Select */}
        <FormField
          control={form.control}
          name="applicant_employment_status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current employment status</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Employed">Employed</SelectItem>
                  <SelectItem value="Self-employed">Self-employed</SelectItem>
                  <SelectItem value="Unemployed">Unemployed</SelectItem>
                  <SelectItem value="Retired">Retired</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Date */}
        <FormField
          control={form.control}
          name="pinstructor_dateofjoin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of join</FormLabel>
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
                  <Calendar
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
        {/* Checkbox + Conditional */}
        <div className="flex flex-col col-span-1 md:col-span-2 w-full gap-4 py-4">
          <FormField
            control={form.control}
            name="applicant_business_history"
            render={({ field }) => (
              <FormItem className="flex flex-wrap items-center gap-6 text-p w-full col-span-1 md:col-span-2 space-y-0">
                <FormLabel className="text-p_ui">
                  Do you have prior business ownership experience?
                </FormLabel>
                <div className="flex gap-2 items-center">
                  <FormControl>
                    <Checkbox
                      className="p-0 m-0"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <span className="text-subtle">Yes</span>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="applicant_business_history_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-p">
                  If so, please provide details.
                </FormLabel>
                <FormControl>
                  <Textarea
                    disabled={form.watch("applicant_business_history") !== true}
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* File */}
        <FormField
          control={form.control}
          name="pemployee_experience"
          render={() => (
            <FormItem>
              <FormLabel>Experience</FormLabel>
              <FormControl>
                <Input type="file" className="file-upload" {...experienceRef} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="md:col-span-2">
          Add Goop
        </Button>
      </form>
    </Form>
  );
};

export default FormAddGoop;
