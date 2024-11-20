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
import { FormSchemaAddAdmin, TFormSchemaAddAdmin } from "@/lib/types-forms";
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
import { CalendarDropdown } from "@/components/ui/calendar-dropdown";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const FormAddAdmin = ({
  editObj,
}: {
  editObj?: TFormSchemaAddAdmin | undefined;
}) => {
  const { toast } = useToast();

  const defaultValues = editObj
    ? editObj
    : {
        nid: "",
        employee_name: "",
        employee_email: "",
        gender: "",
        dateofbirth: undefined, //
        homeaddress: "", //
        employee_salary: 0, //
        employee_mobilenum: "",
        joined_date: undefined,
        employee_pic: undefined,
        fathername_husbandname: "", //
        experience: "", //
        religion: "", //
        blood_group: "", //
        education: "", //
        username: "",
        password: "",
        //
        timezone: "",
        language: "",
        currency: "",
        theme: "",
        // Admin specific
        admin_position: "",
        branch_id: "",
      };
  // 1. Define your form.

  const form = useForm<TFormSchemaAddAdmin>({
    resolver: zodResolver(FormSchemaAddAdmin),
    defaultValues,
  });

  const imgRef = form.register("employee_pic");

  const onSubmit = async (data: TFormSchemaAddAdmin) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Admin added successfully!",
    });
    form.reset(defaultValues);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        <FormField
          control={form.control}
          name="nid"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4 h-full">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
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
          <FormField
            control={form.control}
            name="dateofbirth"
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
                          "pl-3 text-left font-normal w-full bg-muted/20",
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
        </div>
        <FormField
          control={form.control}
          name="homeaddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Home address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employee_salary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employee_mobilenum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="joined_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Joined date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      size={"input"}
                      className={cn(
                        "pl-3 text-left font-normal w-full bg-muted/20",
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
                    fromYear={1900}
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
          name="employee_pic"
          render={() => (
            <FormItem>
              <FormLabel>
                Picture{" "}
                <span className="text-muted-foreground">(Optional)</span>
              </FormLabel>
              <FormControl>
                <Input type="file" className="file-upload" {...imgRef} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fathername_husbandname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Father/Husband name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel className="text-p">Experience</FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="religion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Religion</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Muslim">Muslim</SelectItem>
                  <SelectItem value="Christian">Christian</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="blood_group"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blood group</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="AB">AB</SelectItem>
                  <SelectItem value="O">O</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Education</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
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
          name="timezone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Timezone</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="GMT - 12:00">GMT - 12:00</SelectItem>
                  <SelectItem value="GMT - 11:00">GMT - 11:00</SelectItem>
                  <SelectItem value="GMT - 10:00">GMT - 10:00</SelectItem>
                  <SelectItem value="GMT - 9:00">GMT - 9:00</SelectItem>
                  <SelectItem value="GMT - 8:00">GMT - 8:00</SelectItem>
                  <SelectItem value="GMT - 7:00">GMT - 7:00</SelectItem>
                  <SelectItem value="GMT - 6:00">GMT - 6:00</SelectItem>
                  <SelectItem value="GMT - 5:00">GMT - 5:00</SelectItem>
                  <SelectItem value="GMT - 4:00">GMT - 4:00</SelectItem>
                  <SelectItem value="GMT - 3:00">GMT - 3:00</SelectItem>
                  <SelectItem value="GMT - 2:00">GMT - 2:00</SelectItem>
                  <SelectItem value="GMT - 1:00">GMT - 1:00</SelectItem>
                  <SelectItem value="GMT + 0:00">GMT + 0:00</SelectItem>
                  <SelectItem value="GMT + 1:00">GMT + 1:00</SelectItem>
                  <SelectItem value="GMT + 2:00">GMT + 2:00</SelectItem>
                  <SelectItem value="GMT + 3:00">GMT + 3:00</SelectItem>
                  <SelectItem value="GMT + 4:00">GMT + 4:00</SelectItem>
                  <SelectItem value="GMT + 5:00">GMT + 5:00</SelectItem>
                  <SelectItem value="GMT + 6:00">GMT + 6:00</SelectItem>
                  <SelectItem value="GMT + 7:00">GMT + 7:00</SelectItem>
                  <SelectItem value="GMT + 8:00">GMT + 8:00</SelectItem>
                  <SelectItem value="GMT + 9:00">GMT + 9:00</SelectItem>
                  <SelectItem value="GMT + 10:00">GMT + 10:00</SelectItem>
                  <SelectItem value="GMT + 11:00">GMT + 11:00</SelectItem>
                  <SelectItem value="GMT + 12:00">GMT + 12:00</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Arabic">Arabic</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currency</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="AED">AED</SelectItem>
                  <SelectItem value="EGP">EGP</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Theme</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Light">Light</SelectItem>
                  <SelectItem value="Dark">Dark</SelectItem>
                  <SelectItem value="System">System</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="admin_position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Admin Position</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Option 1">Option 1</SelectItem>
                  <SelectItem value="Option 2">Option 2</SelectItem>
                  <SelectItem value="Option 3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="branch_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Branch</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Branch ID 1">Branch 1</SelectItem>
                  <SelectItem value="Branch ID 2">Branch 2</SelectItem>
                  <SelectItem value="Branch ID 3">Branch 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="md:col-span-2">
          {editObj ? "Save changes" : "Add Admin"}
        </Button>
      </form>
    </Form>
  );
};

export default FormAddAdmin;
