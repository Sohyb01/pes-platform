import * as React from "react";

import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BadgeLink } from "@/components/pes-custom/platform-components/BadgeLink";
import { TimeIcon } from "@/components/pes-custom/icons/TimeIcon";
import { ProgramIcon } from "@/components/pes-custom/icons/ProgramIcon";
import { EmployeeIcon } from "@/components/pes-custom/icons/EmployeeIcon";
import { exampleClasses } from "@/lib/data";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { VariantSlideInUp } from "@/lib/motion-constants";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Classes</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        {exampleClasses.map((pesClass, idx) => {
          return (
            <M_Card
              variants={VariantSlideInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: idx * 0.05 }} // Custom delay for each item
              key={idx}
              className="w-full md:max-w-[352px]"
            >
              <CardHeader>
                <CardTitle>{pesClass.class_name}</CardTitle>
                <CardDescription>
                  <div className="w-full flex gap-1 flex-wrap justify-between items-center text-badge pt-2">
                    <BadgeLink href="#">
                      <TimeIcon />
                      <span className="max-w-[12ch] overflow-hidden">
                        {pesClass.program_id}
                      </span>
                    </BadgeLink>
                    <div>
                      {`${pesClass.classbegindate.getUTCDate()}/${
                        pesClass.classbegindate.getUTCMonth() + 1
                      }/${pesClass.classbegindate.getFullYear()}
                      -
                      ${pesClass.classenddate.getUTCDate()}/${
                        pesClass.classenddate.getUTCMonth() + 1
                      }/${pesClass.classenddate.getFullYear()}
                      `}
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex gap-2">
                <BadgeLink href="#">
                  <ProgramIcon />
                  <span className="max-w-[12ch] overflow-hidden">
                    {pesClass.program_id}
                  </span>
                </BadgeLink>
                <BadgeLink href="#">
                  <EmployeeIcon />
                  <span className="max-w-[12ch] overflow-hidden">
                    {pesClass.instructor_id
                      ? pesClass.instructor_id
                      : "No instructor"}
                  </span>
                </BadgeLink>
              </CardFooter>
            </M_Card>
          );
        })}
      </div>
    </div>
  );
};

export default page;
