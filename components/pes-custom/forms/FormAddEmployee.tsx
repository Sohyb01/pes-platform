"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormAddInstructor from "./FormAddInstructor";

const FormAddEmployee = () => {
  const [employeeType, setEmployeeType] = useState<
    null | string | "Instructor" | "Admin" | "Receptionist"
  >(null);

  return (
    <div className="flex flex-col gap-4">
      {/* Select employee type */}
      <div className="flex gap-4 items-center pt-4">
        Select employee type
        <Select onValueChange={(e) => setEmployeeType(e)}>
          <SelectTrigger className="w-[12rem]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem
                // onSelect={() => setEmployeeType("Instructor")}
                value="Instructor"
              >
                Instructor
              </SelectItem>
              <SelectItem
                // onSelect={() => setEmployeeType("Receptionist")}
                value="Receptionist"
              >
                Receptionist
              </SelectItem>
              <SelectItem
                // onSelect={() => setEmployeeType("Admin")}
                value="Admin"
              >
                Admin
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {employeeType === "Instructor" && <FormAddInstructor />}
    </div>
  );
};

export default FormAddEmployee;
