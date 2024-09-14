import React from "react";
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
import { buttonVariants } from "@/components/ui/button";
import WebsiteNavbar from "@/components/pes-custom/WebsiteNavbar";

const TestingPage = () => {
  return (
    <>
      <WebsiteNavbar />
      <div className="flex flex-col gap-20 w-full items-start p-10 container py-40">
        <div className="flex flex-col gap-4 w-full items-start">
          <h1 className="text-h1">Testing Page</h1>
          <p className="text-p-ui">P UI</p>
        </div>
        {/*  */}
        <AlertDialog>
          <AlertDialogTrigger
            className={buttonVariants({ variant: "outline" })}
          >
            Click Me
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-primary">
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default TestingPage;
