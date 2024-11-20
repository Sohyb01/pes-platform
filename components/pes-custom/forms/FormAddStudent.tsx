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
import { FormSchemaAddStudent, TFormSchemaAddStudent } from "@/lib/types-forms";
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
// import { CopyIcon } from "../icons/CopyIcon";

const FormAddStudent = ({
  editObj,
}: {
  editObj?: TFormSchemaAddStudent | undefined;
}) => {
  const { toast } = useToast();

  const defaultValues = editObj
    ? editObj
    : {
        student_nid: "",
        student_name: "",
        gender: "",
        student_dateofbirth: undefined,
        student_address: "",
        student_mobile: "",
        student_whatsappnum: "",
        student_pic: null,
        student_dateofadmission: undefined,
        student_prevschool: "",
        student_religion: "",
        student_diseases: "",
        student_laptop: "",
        timezone: "",
        language: "",
        orphan: "",
        isactive: "",
        theme: "",
        student_bloodgroup: "",
        student_feediscount: "",
        student_referralcode: "",
        student_totalsibs: "",
        student_additionalnotes: "",
        student_email: "",
        student_password: "",
        student_familyid: "",
      };

  // 1. Define your form.

  const form = useForm<TFormSchemaAddStudent>({
    resolver: zodResolver(FormSchemaAddStudent),
    defaultValues,
  });

  const onSubmit = async (data: TFormSchemaAddStudent) => {
    // handle form submission
    console.log(data);
    toast({
      title: "Employee added successfully!",
    });
    form.reset(defaultValues);
  };

  const imgRef = form.register("student_pic");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pes-grid-form">
        <FormField
          control={form.control}
          name="student_name"
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
        {/* Optional below */}
        <FormField
          control={form.control}
          name="student_nid"
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
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={field.value} />
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
          name="student_dateofbirth"
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
          name="student_address"
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
        <FormField
          control={form.control}
          name="student_mobile"
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
          name="student_whatsappnum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Whatsapp number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="student_pic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student picture</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  className="file-upload"
                  placeholder={field.value}
                  {...imgRef}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="student_dateofadmission"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of admission</FormLabel>
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
        <FormField
          control={form.control}
          name="student_prevschool"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous school name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="student_religion"
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
          name="student_diseases"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student diseases</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="student_laptop"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student laptop</FormLabel>
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
          name="orphan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is an orphan</FormLabel>
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
          name="isactive"
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
          name="student_bloodgroup"
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
          name="student_feediscount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fee discount</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="student_referralcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student referral code</FormLabel>
              <FormControl>
                <Input {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="student_totalsibs"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of siblings</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="student_additionalnotes"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel className="text-p">Additional notes</FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="student_email"
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
          name="student_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <FormField
          control={form.control}
          name="student_familyid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Family ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="md:col-span-2">
          {editObj ? "Save changes" : "Add Employee"}
        </Button>
      </form>
    </Form>
  );
};

export default FormAddStudent;
