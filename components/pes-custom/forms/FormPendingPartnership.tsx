"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/hooks/use-toast";
import {
  FormSchemaPendingPartnership,
  TFormSchemaPendingPartnership,
} from "@/lib/types-forms";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
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
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { CalendarDropdown } from "@/components/ui/calendar-dropdown";

const FormPendingPartnership = () => {
  const { toast } = useToast();

  const defaultValues = {
    applicant_name: "",
    applicant_email: "",
    applicant_whatsapp: "",
    applicant_address: "",
    //
    applicant_organization: "",
    applicant_position: "",
    //
    partnership_type: "",
    partnership_description: "",
    partnership_goals: "",
    partnership_start_date: undefined,
    partnership_duration: "",
    partnership_requirements: "",
    //
    applicant_message: "",
  };

  // 1. Define your form.
  const form = useForm<TFormSchemaPendingPartnership>({
    resolver: zodResolver(FormSchemaPendingPartnership),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaPendingPartnership) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Thank you for applying!",
      description: "We will contact you soon.",
    });
    form.reset(defaultValues);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        <div className="col-span-1 md:col-span-2 text-h4 pt-8 border-t-border border-t-[1px]">
          Necessary information
        </div>
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
        <FormField
          control={form.control}
          name="applicant_email"
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
          name="applicant_whatsapp"
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
          name="applicant_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="applicant_organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your organization</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="applicant_position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your position</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="partnership_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Partnership type</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Joint Project">Joint Project</SelectItem>
                  <SelectItem value="Event Collaboration">
                    Event Collaboration
                  </SelectItem>
                  <SelectItem value="Course Instruction">
                    Course Instruction
                  </SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="partnership_description"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel>
                Please describe what you have in mind for the partnership
              </FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="partnership_goals"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel>
                What are the goals you wish to accomplish for this partnership?
              </FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="partnership_start_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Approximate Start Date</FormLabel>
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
                    toYear={2030}
                    defaultMonth={new Date()}
                    selected={field.value}
                    disabled={(date) => date < new Date()}
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
          name="partnership_duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Approximate Duration</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="partnership_requirements"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel>
                What requirements should PES provide for this partnership?
              </FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="applicant_message"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel>
                Is there anything you would like us to know?
              </FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-auto md:col-span-2">
          Submit application
        </Button>
      </form>
    </Form>
  );
};

export default FormPendingPartnership;
