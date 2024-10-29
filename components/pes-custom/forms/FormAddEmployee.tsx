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
import FormAddAdmin from "./FormAddAdmin";

const FormAddEmployee = () => {
  const [employeeType, setEmployeeType] = useState<
    null | string | "Instructor" | "Admin" | "Receptionist"
  >(null);

  return (
    <div className="flex flex-col gap-4">
      {/* Select employee type */}
      <div className="flex gap-4 items-center pt-4 pb-8 border-b-border border-b-[1px]">
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
      {employeeType === "Admin" && <FormAddAdmin />}
    </div>
  );
};

export default FormAddEmployee;
