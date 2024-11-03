"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreVertical } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

import { Checkbox } from "@/components/ui/checkbox";
import { TFormSchemaAddStudent } from "@/lib/types-forms";
import TableDateFormatter from "@/components/pes-custom/platform-components/TableDateFormatter";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const studentsColumns: ColumnDef<TFormSchemaAddStudent>[] = [
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
    accessorKey: "student_nid",
    header: "National ID",
  },
  {
    accessorKey: "student_name",
    header: "Name",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "student_dateofbirth",
    header: ({ column }) => {
      return (
        <Button
          variant="sorting"
          size="sorting"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Born
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dateobj = row.getValue("student_dateofbirth") as Date;
      return <TableDateFormatter date={dateobj} />;
    },
  },
  {
    accessorKey: "student_address",
    header: "Address",
  },
  {
    accessorKey: "student_mobile",
    header: "Mobile",
  },
  {
    accessorKey: "student_whatsappnum",
    header: "Whatsapp",
  },
  {
    accessorKey: "student_pic",
    header: "Picture",
    cell: () => {
      return (
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "student_dateofadmission",
    header: ({ column }) => {
      return (
        <Button
          variant="sorting"
          size="sorting"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date of Admission
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dateobj = row.getValue("student_dateofadmission") as Date;
      return <TableDateFormatter date={dateobj} />;
    },
  },
  {
    accessorKey: "student_prevschool",
    header: "Previous school",
  },
  {
    accessorKey: "student_religion",
    header: "Religion",
  },
  {
    accessorKey: "student_diseases",
    header: "Diseases",
  },
  {
    accessorKey: "student_laptop",
    header: "Has Laptop",
  },
  {
    accessorKey: "timezone",
    header: "Timezone",
  },
  {
    accessorKey: "language",
    header: "Language",
  },
  {
    accessorKey: "orphan",
    header: "Orphan",
  },
  {
    accessorKey: "isactive",
    header: "Active",
  },
  {
    accessorKey: "theme",
    header: "Theme",
  },
  {
    accessorKey: "student_bloodgroup",
    header: "Blood Group",
  },
  {
    accessorKey: "feediscount",
    header: "Fee Discount",
  },
  {
    accessorKey: "referralcode",
    header: "Referral Code",
  },
  {
    accessorKey: "student_totalsibs",
    header: "Siblings",
  },
  {
    accessorKey: "student_additionalnotes",
    header: "Notes",
  },
  {
    accessorKey: "student_email",
    header: "Email",
  },
  // Password Hidden
  // {
  //   accessorKey: "student_password",
  //   header: "Password",
  // },
  {
    accessorKey: "student_familyid",
    header: "Family",
  },
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
                    <AlertDialogTitle>Edit Student</AlertDialogTitle>
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
