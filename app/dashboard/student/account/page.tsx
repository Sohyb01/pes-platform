import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import * as React from "react";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      {/* Name, Icon, and Logout Row */}
      <div className="flex w-full items-center justify-start gap-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p>Mahmoud Ashraf</p>
          <Link href="#" className="text-destructive">
            Log out
          </Link>
        </div>
      </div>
      <div className="horizontal-divider my-4"></div>
    </div>
  );
};

export default page;
