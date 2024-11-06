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
  FormSchemaPendingFranchise,
  TFormSchemaPendingFranchise,
} from "@/lib/types-forms";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormPendingFranchise = () => {
  const { toast } = useToast();

  const defaultValues = {
    applicant_name: "",
    applicant_email: "",
    applicant_whatsapp: "",
    applicant_address: "",
    applicant_business_history: false,
    applicant_business_history_description: "",
    applicant_education_business_history: false,
    applicant_education_business_history_description: "",
    applicant_employment_status: "",
    applicant_investment_budget: "",
    applicant_has_financing: false,
    franchise_desired_location_city: "",
    franchise_desired_location_country: "",
    applicant_knows_competition_in_location: false,
    applicant_knows_competition_in_location_description: "",
    applicant_why_pes: "",
    applicant_was_bankrupt: false,
    applicant_was_bankrupt_description: "",
    applicant_was_in_lawsuit: false,
    applicant_was_in_lawsuit_description: "",
    applicant_has_necessary_documents: false,
    applicant_message: undefined,
  };

  // 1. Define your form.
  const form = useForm<TFormSchemaPendingFranchise>({
    resolver: zodResolver(FormSchemaPendingFranchise),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaPendingFranchise) => {
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
        <FormField
          control={form.control}
          name="applicant_investment_budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                How much are you willing to invest into this project?
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="franchise_desired_location_country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desired country for the franchise</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="franchise_desired_location_city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desired city for the franchise</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-1 md:col-span-2 text-h4 pt-8 border-t-border border-t-[1px]">
          Please only check the options that apply to you
        </div>
        <div className="flex flex-col col-span-1 md:col-span-2 w-full gap-4">
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
        <div className="flex flex-col col-span-1 md:col-span-2 w-full gap-4 py-4">
          <FormField
            control={form.control}
            name="applicant_education_business_history"
            render={({ field }) => (
              <FormItem className="flex flex-wrap items-center gap-6 text-p w-full col-span-1 md:col-span-2 space-y-0">
                <FormLabel className="text-p_ui">
                  Do you have experience in education, robotics, programming, or
                  AI?
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
            name="applicant_education_business_history_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-p">
                  If so, please provide details.
                </FormLabel>
                <FormControl>
                  <Textarea
                    disabled={
                      form.watch("applicant_education_business_history") !==
                      true
                    }
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col col-span-1 md:col-span-2 w-full gap-4 py-4">
          <FormField
            control={form.control}
            name="applicant_knows_competition_in_location"
            render={({ field }) => (
              <FormItem className="flex flex-wrap items-center gap-6 text-p w-full col-span-1 md:col-span-2 space-y-0">
                <FormLabel className="text-p_ui">
                  Are you familiar with the local market and competition in this
                  region?
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
            name="applicant_knows_competition_in_location_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-p">
                  If so, please provide details.
                </FormLabel>
                <FormControl>
                  <Textarea
                    disabled={
                      form.watch("applicant_knows_competition_in_location") !==
                      true
                    }
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col col-span-1 md:col-span-2 w-full gap-4 py-4">
          <FormField
            control={form.control}
            name="applicant_was_bankrupt"
            render={({ field }) => (
              <FormItem className="flex flex-wrap items-center gap-6 text-p w-full col-span-1 md:col-span-2 space-y-0">
                <FormLabel className="text-p_ui">
                  Have you ever faced bankruptcy while running a business?
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
            name="applicant_was_bankrupt_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-p">
                  If so, please provide details.
                </FormLabel>
                <FormControl>
                  <Textarea
                    disabled={form.watch("applicant_was_bankrupt") !== true}
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col col-span-1 md:col-span-2 w-full gap-4 py-4">
          <FormField
            control={form.control}
            name="applicant_was_in_lawsuit"
            render={({ field }) => (
              <FormItem className="flex flex-wrap items-center gap-6 text-p w-full col-span-1 md:col-span-2 space-y-0">
                <FormLabel className="text-p_ui">
                  Have you ever been involved in a lawsuit relating to business?
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
            name="applicant_was_in_lawsuit_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-p">
                  If so, please provide details.
                </FormLabel>
                <FormControl>
                  <Textarea
                    disabled={form.watch("applicant_was_in_lawsuit") !== true}
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="applicant_has_financing"
          render={({ field }) => (
            <FormItem className="flex flex-wrap items-center gap-6 text-p w-full col-span-1 md:col-span-2 space-y-0">
              <FormLabel className="text-p_ui">
                Do you have financing secured to invest in this project?
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
          name="applicant_has_necessary_documents"
          render={({ field }) => (
            <FormItem className="flex flex-wrap items-center gap-6 text-p w-full col-span-1 md:col-span-2 space-y-0">
              <FormLabel className="text-p_ui">
                Do you meet the legal requirements to operate a business in your
                desired location?
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
        <div className="col-span-1 md:col-span-2 text-h4 pt-8 border-t-border border-t-[1px]">
          Additional information
        </div>
        <FormField
          control={form.control}
          name="applicant_why_pes"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel>
                Why are you motivated to franchise with PES?
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

export default FormPendingFranchise;
