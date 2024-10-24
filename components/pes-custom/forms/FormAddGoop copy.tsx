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
  FormSchemaAddFranchise,
  FormSchemaAddInstructor,
  TFormSchemaAddFranchise,
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

const FormAddFranchise = () => {
  const { toast } = useToast();

  const defaultValues = {};
  // 1. Define your form.

  const form = useForm<TFormSchemaAddFranchise>({
    resolver: zodResolver(FormSchemaAddFranchise),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaAddFranchise) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Franchise added successfully!",
    });
    form.reset(defaultValues);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        <Button type="submit" className="md:col-span-2">
          Add Franchise
        </Button>
      </form>
    </Form>
  );
};

export default FormAddFranchise;
