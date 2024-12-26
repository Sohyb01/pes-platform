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
import { Textarea } from "@/components/ui/textarea";

export const FormSchemaUpdatePortfolioAbout = z.object({
  about: z.string().min(10, {
    message: "About must be at least 10 characters.",
  }),
});

interface FormUpdatePortfolioAboutProps {
  onSubmit: (values: z.infer<typeof FormSchemaUpdatePortfolioAbout>) => void;
  editObj: z.infer<typeof FormSchemaUpdatePortfolioAbout>;
}

const FormUpdatePortfolioAbout = ({
  onSubmit,
  editObj,
}: FormUpdatePortfolioAboutProps) => {
  const form = useForm<z.infer<typeof FormSchemaUpdatePortfolioAbout>>({
    resolver: zodResolver(FormSchemaUpdatePortfolioAbout),
    defaultValues: editObj,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Update
        </Button>
      </form>
    </Form>
  );
};

export default FormUpdatePortfolioAbout;
