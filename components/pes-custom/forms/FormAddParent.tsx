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
import { FormSchemaAddParent, TFormSchemaAddParent } from "@/lib/types-forms";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormAddParent = () => {
  const { toast } = useToast();

  const defaultValues = {
    nid: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    parent_education: "",
    parent_profession: "",
    parent_occupation: "",
    parent_income: "",
    parent_address: "",
    photo: null,
    is_active: "",
    referral: "",
    language: "",
    timezone: "",
    theme: "",
    promocode: "",
    num_of_children: "",
    username: "",
  };

  // 1. Define your form.

  const form = useForm<TFormSchemaAddParent>({
    resolver: zodResolver(FormSchemaAddParent),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaAddParent) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Employee added successfully!",
    });
    form.reset(defaultValues);
  };

  const imgRef = form.register("photo");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        {/* Optional below */}
        <FormField
          control={form.control}
          name="nid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student National ID</FormLabel>
              <FormControl>
                <Input {...field} />
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
          name="email"
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
          name="phone"
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
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Muslim">Male</SelectItem>
                  <SelectItem value="Christian">Female</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parent_education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent education</FormLabel>
              <FormControl>
                <Input {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parent_profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent profession</FormLabel>
              <FormControl>
                <Input {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parent_occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent occupation</FormLabel>
              <FormControl>
                <Input {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parent_income"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent income</FormLabel>
              <FormControl>
                <Input {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parent_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent address</FormLabel>
              <FormControl>
                <Input {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="photo"
          render={() => (
            <FormItem>
              <FormLabel>Parent picture</FormLabel>
              <FormControl>
                <Input type="file" className="file-upload" {...imgRef} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="is_active"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is active</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="referral"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Referral code</FormLabel>
              <FormControl>
                <Input {...field}></Input>
              </FormControl>
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
          name="promocode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Promo code</FormLabel>
              <FormControl>
                <Input {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="num_of_children"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of children</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
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
                <Input {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="md:col-span-2">
          Add Employee
        </Button>
      </form>
    </Form>
  );
};

export default FormAddParent;
