import * as React from "react";

import { CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { exampleClasses } from "@/lib/data";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { VariantSlideInUp } from "@/lib/motion-constants";
import Link from "next/link";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Classes 📚</h3>
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
                <CardTitle>📘 {pesClass.class_name}</CardTitle>
                <div className="w-full flex gap-1 flex-wrap justify-between items-center text-subtle pt-2">
                  <Link href="#">
                    <span className="max-w-[12ch] overflow-hidden">
                      ENG. Ahmed Reda
                      {/* {pesClass.instructor_id} */}
                    </span>
                  </Link>
                  <div className="text-muted-foreground">
                    {`${pesClass.classbegindate.getUTCDate()}/${
                      pesClass.classbegindate.getUTCMonth() + 1
                    }
                      -
                      ${pesClass.classenddate.getUTCDate()}/${
                      pesClass.classenddate.getUTCMonth() + 1
                    }
                      `}
                  </div>
                </div>
              </CardHeader>
              <CardFooter className="flex gap-2">
                <Link href="#" className="text-subtle text-muted-foreground">
                  <span className="max-w-[12ch] overflow-hidden">
                    {/* {pesClass.program_id} */}
                    Young Geniuses Program
                  </span>
                </Link>
              </CardFooter>
            </M_Card>
          );
        })}
      </div>
    </div>
  );
};

export default page;
