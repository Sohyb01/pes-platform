import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BadgeLink } from "@/components/pes-custom/platform-components/BadgeLink";
import { EmployeeIcon } from "@/components/pes-custom/icons/EmployeeIcon";
import { FileIcon } from "@/components/pes-custom/icons/FileIcon";
import { Button } from "@/components/ui/button";
import { ClassIcon } from "@/components/pes-custom/icons/ClassIcon";
import { JoinArrowIcon } from "@/components/pes-custom/icons/JoinArrowIcon";
import { DownloadIcon } from "@/components/pes-custom/icons/DownloadIcon";
import { exampleMaterials } from "@/lib/data";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Materials</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        {/* Card */}
        {exampleMaterials.map((material, idx) => {
          return (
            <Card key={idx} className="w-full md:max-w-[352px]">
              <CardHeader>
                <CardTitle>Material</CardTitle>
                <CardDescription className="flex justify-between pt-2">
                  <BadgeLink href="#">
                    <ClassIcon />
                    <span className="line-clamp-1 ">{material.session_id}</span>
                  </BadgeLink>
                  <BadgeLink href="#">
                    <EmployeeIcon />
                    <span className="line-clamp-1 ">
                      {material.instructor_id}
                    </span>
                  </BadgeLink>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-detail">Files</p>
                <BadgeLink href="#" className="w-fit">
                  <FileIcon />
                  Starting Files
                </BadgeLink>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button variant="outline" size="sm" className="w-full">
                  <JoinArrowIcon />
                  Session link (how to use)
                </Button>
                <Button variant="default" size="sm" className="w-full">
                  <DownloadIcon />
                  Download
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default page;
