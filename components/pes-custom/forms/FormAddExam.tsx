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
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchemaAddExam, TFormSchemaAddExam } from "@/lib/types-forms";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormAddExam = () => {
  const { toast } = useToast();

  const defaultValues = {
    quizname: "",
    quiz_type: "",
    timestamp: undefined,
    questions_and_answers: [{ question: "", answer: "" }],
    class_field: "abc",
    instructor_id: "abc",
  };
  // 1. Define your form.

  const form = useForm<TFormSchemaAddExam>({
    resolver: zodResolver(FormSchemaAddExam),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaAddExam) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Class added successfully!",
    });
    form.reset(defaultValues);
  };

  const { fields, append, remove } = useFieldArray({
    name: "questions_and_answers",
    control: form.control,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        <FormField
          control={form.control}
          name="quizname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quiz name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quiz_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quiz type</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Pop quiz">Pop quiz</SelectItem>
                  <SelectItem value="Mid-term">Mid-term</SelectItem>
                  <SelectItem value="Final">Final</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timestamp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Timestamp</FormLabel>
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
        <div className="flex flex-col gap-8 w-full col-span-1 md:col-span-2 pb-8 border-b-border border-b-[1px]">
          {fields.map((field, index) => (
            <div key={field.id} className="flex flex-col gap-4">
              <FormItem>
                <FormLabel>Question {index + 1}</FormLabel>
                <FormControl>
                  <Input
                    {...form.register(
                      `questions_and_answers.${index}.question` as const
                    )}
                    placeholder="Enter question"
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>Answer {index + 1}</FormLabel>
                <FormControl>
                  <Textarea
                    {...form.register(
                      `questions_and_answers.${index}.answer` as const
                    )}
                    placeholder="Enter answer"
                  />
                </FormControl>
              </FormItem>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => remove(index)}
                className="w-fit gap-2 p-0 hover:bg-transparent text-destructive"
              >
                Remove Question
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => append({ question: "", answer: "" })}
            className="mt-4"
          >
            Add Question
          </Button>
        </div>
        <Button type="submit" className="md:col-span-2">
          Create Exam
        </Button>
      </form>
    </Form>
  );
};

export default FormAddExam;
