"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import WebsiteNavbar from "@/components/pes-custom/WebsiteNavbar";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const LoginPage = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <WebsiteNavbar />
      <section className="w-full graphic-bg-1 h-full">
        <div className="container flex flex-col items-start text-start section-px py-20 pt-[100px] text-foreground gap-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full max-w-[448px] p-6 bg-card rounded border-[1px] border-border mx-auto"
            >
              <div className="text-h3">
                Welcome back!
                <div className="text-p_ui text-muted-foreground mt-1">
                  Login to access the PES platform
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Email" {...field} />
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
                        <Input placeholder="Enter your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-4">
                <Button type="submit" className="w-full">
                  Log in
                </Button>
                <Link href="/dashboard/signup" className="mx-auto text-subtle">
                  No Account? <span className="underline">Sign up</span>
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
