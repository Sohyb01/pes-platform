"use client";

import {
  FormSchemaSolvedExam,
  TFormSchemaAddExam,
  TFormSchemaSolvedExam,
} from "@/lib/types-forms";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { redirectOnServer } from "@/lib/common-functions";
import Countdown from "react-countdown";

const ActiveExam = ({ exam }: { exam: TFormSchemaAddExam }) => {
  const { toast } = useToast();

  const defaultValues = { student_id: "1", ...exam };

  const form = useForm<TFormSchemaSolvedExam>({
    resolver: zodResolver(FormSchemaSolvedExam),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaSolvedExam) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Submitted successfully!",
    });
    form.reset(defaultValues);
    redirectOnServer("/dashboard/student/quizzes");
  };

  const { fields } = useFieldArray({
    name: "questions",
    control: form.control,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        <h3 className="text-h3 col-span-1 md:col-span-2">
          {exam.quizname}{" "}
          <span className="fixed right-10 p-2 border-border border-[1px] rounded-[0.5rem] bg-background text-large">
            <Countdown date={Date.now() + exam.duration * 60 * 1000} />
          </span>
        </h3>
        {fields.map((field, index) =>
          field.type == "mcq" ? (
            <div key={index} className="col-span-1 md:col-span-2">
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="text-large">
                  {field.questionText}
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex flex-col space-y-1"
                    // {...form.register(`questions.${index}.studentAnswer`)}
                    onValueChange={(value) =>
                      form.setValue(`questions.${index}.studentAnswer`, value)
                    }
                  >
                    {/* Display the options as radio group */}
                    {field.options.map((option, idx) => {
                      return (
                        <FormItem
                          key={idx}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={`${option}`} />
                          </FormControl>
                          <FormLabel className=" text-p_ui">{option}</FormLabel>
                        </FormItem>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
          ) : field.type == "essay" ? (
            <div className="col-span-1 md:col-span-2" key={index}>
              <FormItem className="flex flex-col gap-2 w-full">
                <FormLabel className="text-large">
                  {field.questionText}
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-background"
                    {...form.register(`questions.${index}.studentAnswer`)}
                  ></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
          ) : (
            <div key={index} className="col-span-1 md:col-span-2">
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="text-large">
                  {field.questionText}
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex space-x-4"
                    onValueChange={(value) =>
                      form.setValue(
                        `questions.${index}.studentAnswer`,
                        value === "true"
                      )
                    } // Convert string back to boolean
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="text-p_ui">True</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="text-p_ui">False</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
          )
        )}
        <Button
          // disabled={questionsArray.some(
          //   (question) =>
          //     question.studentAnswer == null
          //       ? true
          //       : typeof question.studentAnswer == "string" &&
          //         question.studentAnswer.length < 1
          //       ? true
          //       : false // Checks for both null and undefined
          // )}
          onClick={() => onSubmit(form.getValues())}
          className="md:col-span-2"
        >
          Finish exam
        </Button>
      </form>
    </Form>
  );
};

export default ActiveExam;
