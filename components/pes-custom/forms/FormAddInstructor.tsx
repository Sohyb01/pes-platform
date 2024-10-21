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

const FormAddInstructor = () => {
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<TFormSchemaAddInstructor>({
    resolver: zodResolver(FormSchemaAddInstructor),
  });

  const onSubmit = async (data: TFormSchemaAddInstructor) => {
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
          name="employee_nid"
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
          name="employee_name"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4 h-full">
          <FormField
            control={form.control}
            name="employee_dateofbirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of birth</FormLabel>
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
                      fromYear={1900}
                      toYear={2020}
                      selected={field.value}
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
            name="employee_gender"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4 h-full">
          <FormField
            control={form.control}
            name="employee_dateofjoin"
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
          <FormField
            control={form.control}
            name="instructor_cv"
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
        </div>
        <FormField
          control={form.control}
          name="employee_email"
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
          name="employee_mobile"
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
          name="employee_whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Whatsapp</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instructor_faculty"
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
          name="instructor_major"
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
        <FormField
          control={form.control}
          name="employee_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employee_address"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
          <FormField
            control={form.control}
            name="employee_experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience</FormLabel>
                <FormControl>
                  <Input type="file" className="file-upload" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employee_img"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Picture</FormLabel>
                <FormControl>
                  <Input type="file" className="file-upload" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="md:col-span-2">
          Add Employee
        </Button>
      </form>
    </Form>
  );
};

export default FormAddInstructor;
