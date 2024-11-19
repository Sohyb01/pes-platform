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
import { TFormSchemaAddAssignment } from "@/lib/types-forms";
import TableDateFormatter from "@/components/pes-custom/platform-components/TableDateFormatter";
import Link from "next/link";

export const AssignmentsColumns: ColumnDef<TFormSchemaAddAssignment>[] = [
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
    accessorKey: "assignment_url",
    header: "Link",
    cell: ({ row }) => {
      const assignment = row.original;

      return assignment.assignment_url ? (
        <Link
          href={assignment.assignment_url}
          className="w-[16ch] hover:underline"
        >
          View Assignment
        </Link>
      ) : (
        <div className="w-[16ch] text-muted-foreground">Unavailable</div>
      );
    },
  },
  {
    accessorKey: "assignment_duedate",
    header: ({ column }) => {
      return (
        <Button
          variant="sorting"
          size="sorting"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Due Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dateobj = row.getValue("assignment_duedate") as Date;
      return <TableDateFormatter date={dateobj} />;
    },
  },
  {
    accessorKey: "assignment_attachment",
    header: "Attachment",
    cell: ({ row }) => {
      const assignment = row.original;

      return assignment.assignment_attachment ? (
        <Link href="#" className="hover:underline">
          {assignment.assignment_attachment[0].name}
        </Link>
      ) : (
        <div className="text-muted-foreground">None</div>
      );
    },
  },
  {
    accessorKey: "assignment_description",
    header: "Description",
  },
  {
    accessorKey: "subject_id",
    header: "Subject",
  },
  {
    accessorKey: "class_id",
    header: "Class",
  },
  {
    accessorKey: "sent_by",
    header: "Sent by",
  },
  //
  {
    id: "actions",
    cell: ({ row }) => {
      const obj = row.original;

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
              <Link
                href={`/dashboard/superadmin/assignments/${obj.assignment_id}`}
                className={`${buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })} text-start justify-start px-2 py-1.5`}
              >
                <span className="w-full text-start">Edit</span>
              </Link>
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
