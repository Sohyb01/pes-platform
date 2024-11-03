"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { MoreVertical } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TFormSchemaAddEmployee } from "@/lib/types-forms";
import TableDateFormatter from "../platform-components/TableDateFormatter";

export const employeesColumns: ColumnDef<TFormSchemaAddEmployee>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  //
  {
    accessorKey: "employee_name",
    header: "Name",
  },
  {
    accessorKey: "user_type",
    header: "Type",
  },
  {
    accessorKey: "nid",
    header: "National ID",
  },
  {
    accessorKey: "employee_name",
    header: "Name",
  },
  {
    accessorKey: "employee_email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "dateofbirth",
    header: ({ column }) => {
      return (
        <Button
          variant="sorting"
          size="sorting"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date of birth
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dateobj = row.getValue("dateofbirth") as Date;
      return (
        <div className="font-medium">
          {"" +
            dateobj.getDay() +
            "/" +
            dateobj.getMonth() +
            "/" +
            dateobj.getFullYear()}
        </div>
      );
    },
  },
  {
    accessorKey: "homeaddress",
    header: "Address",
  },
  {
    accessorKey: "employee_salary",
    header: ({ column }) => {
      return (
        <Button
          variant="sorting"
          size="sorting"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Salary
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("employee_salary"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EGP",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "employee_mobilenum",
    header: "Mobile",
  },
  {
    accessorKey: "joined_date",
    header: ({ column }) => {
      return (
        <Button
          variant="sorting"
          size="sorting"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Joined
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dateobj = row.getValue("joined_date") as Date;
      return <TableDateFormatter date={dateobj} />;
    },
  },
  // employee_pic would be here
  {
    accessorKey: "fathername_husbandname",
    header: "Father/Husband Name",
  },
  // experience would be here
  {
    accessorKey: "religion",
    header: "Religion",
  },
  {
    accessorKey: "blood_group",
    header: "Blood group",
  },
  // education would be here
  {
    accessorKey: "username",
    header: "Username",
  },
  // password would be here
  // timezone would be here
  // language would be here
  // theme would be here
  //
  {
    id: "actions",
    cell: ({ row }) => {
      const employee = row.original;
      console.log(employee);

      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-start justify-start px-2 py-1.5"
                  >
                    Edit
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Edit Employee</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className={buttonVariants({ variant: "destructive" })}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <DropdownMenuSeparator />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-start justify-start px-2 py-1.5"
                  >
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      this data from the servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className={buttonVariants({ variant: "destructive" })}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
