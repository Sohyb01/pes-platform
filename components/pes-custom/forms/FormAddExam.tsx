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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { TimePickerDemo } from "@/components/ui/time-picker-demo";

const FormAddExam = ({
  editObj,
}: {
  editObj?: TFormSchemaAddExam | undefined;
}) => {
  const { toast } = useToast();

  const defaultValues = editObj
    ? editObj
    : {
        quizname: "",
        quiz_type: "",
        timestamp: undefined,
        class_field: "abc",
        instructor_id: "123",
        questions: [],
        duration: undefined,
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
    name: "questions",
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
              <FormLabel>Name</FormLabel>
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
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*  */}
        <FormField
          control={form.control}
          name="timestamp"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-left">Timestamp</FormLabel>
              <Popover>
                <FormControl>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP HH:mm:ss")
                      ) : (
                        <span>Set timestamp</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                </FormControl>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                  <div className="p-3 border-t border-border">
                    <TimePickerDemo
                      setDate={field.onChange}
                      date={field.value}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration (in seconds)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*  */}
        <div className="flex flex-col gap-8 w-full col-span-1 md:col-span-2 pb-8 border-b-border border-b-[1px]">
          {fields.map((field, index) =>
            // Case 1: MCQ
            field.type === "mcq" ? (
              <div
                key={field.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>Question {index + 1} (Multiple choice)</FormLabel>
                  <FormControl>
                    <Textarea
                      {...form.register(`questions.${index}.questionText`)}
                      placeholder="Enter question"
                    />
                  </FormControl>
                </FormItem>

                <FormItem className="col-span-1">
                  <FormLabel>Correct option</FormLabel>
                  <FormControl>
                    <Textarea
                      {...form.register(`questions.${index}.correctAnswer`)}
                      placeholder="Enter answer"
                    />
                  </FormControl>
                </FormItem>
                <FormItem className="col-span-1">
                  <FormLabel>Incorrect option</FormLabel>
                  <FormControl>
                    <Textarea
                      {...form.register(`questions.${index}.options.${0}`)}
                      placeholder="Enter answer"
                    />
                  </FormControl>
                </FormItem>
                <FormItem className="col-span-1">
                  <FormLabel>Incorrect option</FormLabel>
                  <FormControl>
                    <Textarea
                      {...form.register(`questions.${index}.options.${1}`)}
                      placeholder="Enter answer"
                    />
                  </FormControl>
                </FormItem>
                <FormItem className="col-span-1">
                  <FormLabel>Incorrect option</FormLabel>
                  <FormControl>
                    <Textarea
                      {...form.register(`questions.${index}.options.${2}`)}
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
            ) : field.type === "true_false" ? (
              // Case 2: True/false
              <div
                key={field.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <FormItem>
                  <FormLabel>Question {index + 1} (True/False)</FormLabel>
                  <FormControl>
                    <Input
                      {...form.register(`questions.${index}.questionText`)}
                      placeholder="Enter question"
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel>Answer {index + 1}</FormLabel>
                  <Select
                    {...form.register(`questions.${index}.correctAnswer`)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="true">True</SelectItem>
                      <SelectItem value="false">False</SelectItem>
                    </SelectContent>
                  </Select>
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
            ) : field.type == "essay" ? (
              // Case 3: Essay
              <div key={field.id} className="flex flex-col gap-4">
                <FormItem>
                  <FormLabel>Question {index + 1} (Essay)</FormLabel>
                  <FormControl>
                    <Textarea
                      {...form.register(`questions.${index}.questionText`)}
                      placeholder="Enter question"
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
            ) : (
              <div>Add questions to start</div>
            )
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="w-fit">
                Add Question
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Question type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-start w-full justify-start"
                  onClick={() =>
                    append({
                      id: `q${fields.length}`,
                      type: "mcq",
                      questionText: "",
                      options: [],
                      correctAnswer: "",
                    })
                  }
                >
                  Multiple-choice
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-start w-full justify-start"
                  onClick={() =>
                    append({
                      id: `q${fields.length}`,
                      type: "essay",
                      questionText: "",
                      wordLimit: 500,
                    })
                  }
                >
                  Essay
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-start w-full justify-start"
                  onClick={() =>
                    append({
                      id: `q${fields.length}`,
                      type: "true_false",
                      questionText: "The Earth is flat.",
                      correctAnswer: true,
                    })
                  }
                >
                  True / False
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button type="submit" className="md:col-span-2">
          {editObj ? "Save changes" : "Create exam"}
        </Button>
      </form>
    </Form>
  );
};

export default FormAddExam;
