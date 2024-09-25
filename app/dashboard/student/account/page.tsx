"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const AccountPage = () => {
  const formSchema = z.object({
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    mobile: z.string().min(2).max(50),
    whatsapp: z.string().min(2).max(50),
    currency: z.string(),
    timezone: z.string().min(2).max(50),
    address: z.string().min(2).max(100),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "Mahmoud",
      lastname: "Ashraf",
      mobile: "+27 1234 5678",
      whatsapp: "+27 1234 5678",
      currency: "EGP",
      timezone: "GMT + 2",
      address: "Victor Emmanuel Sq, Smouha, Alexandria",
    },
  });

  const [isChanged, setIsChanged] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Watch input values
  const watchAllFields = form.watch();

  // Track initial values
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialValues, setInitialValues] = useState(form.getValues()); // Later change this to fetch the data from the backend
  console.log("initial: ", initialValues);

  // Use useEffect to detect if the input values have changed
  useEffect(() => {
    const isDifferent = (
      Object.keys(watchAllFields) as Array<keyof typeof watchAllFields>
    ).some((key) => watchAllFields[key] !== initialValues[key]);

    setIsChanged(isDifferent);

    // If the inputs are changed after a submit, reset the submission state
    if (isDifferent) {
      setIsSubmitted(false);
    }
  }, [initialValues, watchAllFields]);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="dashboard-tab-wrapper">
      {/* Name, Icon, and Logout Row */}
      <div className="flex w-full items-center justify-start gap-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p>Mahmoud Ashraf</p>
          <Link href="#" className="text-destructive">
            Log out
          </Link>
        </div>
      </div>
      <div className="horizontal-divider my-4"></div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20"
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
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Whatsapp number</FormLabel>
                <FormControl>
                  <Input placeholder={form.getValues().whatsapp} {...field} />
                </FormControl>
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={form.getValues().currency} />
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
            name="timezone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Timezone</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={form.getValues().timezone} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="GMT + 0">GMT + 0</SelectItem>
                    <SelectItem value="GMT + 1">GMT + 1</SelectItem>
                    <SelectItem value="GMT + 2">GMT + 2</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder={form.getValues().address} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="mt-auto"
            disabled={!(isChanged && !isSubmitted)}
          >
            Save changes
          </Button>
          {/* <Button className="col-span-1 md:col-span-2" type="submit">
            Submit
          </Button> */}
        </form>
      </Form>
    </div>
  );
};

export default AccountPage;
