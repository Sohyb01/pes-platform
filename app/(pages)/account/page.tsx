"use client";

import { useToast } from "@/components/hooks/use-toast";
import EditProfileForm from "@/components/pes-custom/forms/FormEditProfile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { redirectOnServer } from "@/lib/common-functions";
import * as React from "react";

const AccountPage = () => {
  const { toast } = useToast();
  return (
    <section>
      <div className="container flex flex-col gap-8 items-start lg:items-center text-start section-px py-20 text-foreground w-full">
        {/* Name, Icon, and Logout Row */}
        <div className="flex w-full items-center justify-start gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p>Mahmoud Ashraf</p>
            <Button
              onClick={() => {
                toast({
                  description: "You have logged out successfully.",
                });
                redirectOnServer("/");
              }}
              className={`${buttonVariants({
                variant: "link",
                size: "link",
              })} text-destructive hover:text-destructive/90 duration-100`}
              // className="text-destructive hover:text-destructive/90 duration-100"
            >
              Log out
            </Button>
          </div>
        </div>
        <div className="horizontal-divider my-4"></div>
        <EditProfileForm />
      </div>
    </section>
  );
};

export default AccountPage;
