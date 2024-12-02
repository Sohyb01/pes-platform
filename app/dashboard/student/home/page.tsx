"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { exampleClasses } from "@/lib/data";
import { ArrowRightCircle, ArrowRightCircleIcon } from "lucide-react";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import PESCalendar from "@/components/pes-custom/platform-components/PESCalendar";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const page = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h3 className="text-h2">Hello, Omar! 👋</h3>
      <ResponsiveMasonry
        className="w-full"
        columnsCountBreakPoints={{ 360: 1, 744: 2, 1280: 3 }}
      >
        <Masonry className="w-full" gutter="32px">
          <div className="h-fit">
            <p className="text-h3 pb-4">Schedule</p>
            <PESCalendar />
          </div>
          <div className="h-fit">
            <p className="text-h3 pb-4">Classes</p>
            {exampleClasses.map((studentClass) => {
              return (
                <div
                  key={studentClass.id}
                  className="bg-background rounded-[1rem] flex flex-col text-p_ui overflow-hidden"
                >
                  <div className="flex justify-between text-large px-6 pt-6">
                    {studentClass.class_name}
                  </div>
                  {/* Extra data */}
                  <div className="text-muted-foreground px-6 flex justify-between">
                    <span>Eng Ahmed Reda</span>
                  </div>
                  {/* Buttons */}
                  <div className="flex px-6 pt-4 gap-4 justify-end">
                    <Button className="gap-2" variant="outline" size="sm">
                      Assignments (1)
                      <ArrowRightCircle size={16} />
                    </Button>
                  </div>
                  {/* Progress & Dates */}
                  <div className="pt-6">
                    <div className="flex justify-between px-6 text-muted-foreground text-detail">
                      <span>
                        {" Started " +
                          studentClass.classbegindate.getUTCDate() +
                          "/" +
                          (studentClass.classbegindate.getMonth() + 1)}
                      </span>
                      <span>
                        {" Ends " +
                          studentClass.classenddate.getUTCDate() +
                          "/" +
                          (studentClass.classenddate.getMonth() + 1)}
                      </span>
                    </div>
                    <Progress
                      className="bg-muted mt-2 h-1"
                      value={Math.random() * 100}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-fit flex flex-col gap-4">
            {/* Achievements & Certificates widget */}
            <div className="flex flex-col rounded-[1rem] bg-background border-border border-[1px]">
              <div className="px-4 pt-4">
                <div className="text-p_ui">Omar Mohamed</div>
                <span className="flex gap-1 text-muted-foreground text-subtle items-center">
                  Alexandria, EG
                </span>
              </div>
              <div className="flex gap-4 p-4 pt-4 flex-wrap lg:flex-nowrap">
                {/* Certificates */}
                <Link
                  href="#"
                  className="bg-background lg:border-primary/50 duration-100 lg:hover:border-primary lg:border-[2px] lg:p-4 w-full text-center rounded-[1rem] flex flex-col justify-center items-center"
                >
                  <span className="text-h3 lg:text-h2">5</span>
                  <span className="text-detail">Certificates</span>
                </Link>
                {/* Completed tracks */}
                <Link
                  href="#"
                  className="bg-background lg:border-secondary/50 duration-100 lg:hover:border-secondary lg:border-[2px] lg:p-4 w-full text-center rounded-[1rem] flex flex-col justify-center items-center"
                >
                  <span className="text-h3 lg:text-h2">10</span>
                  <span className="text-detail">Achievements</span>
                </Link>
              </div>
            </div>
            {/* Need help */}
            <div className="flex flex-col rounded-[1rem] bg-background border-border border-[1px]">
              <div className="p-4">
                <div className="text-h3 pb-4">Need to ask a question?</div>
                <Button variant="secondary" className="gap-2">
                  Message instructor
                  <ArrowRightCircleIcon size={16} />
                </Button>
              </div>
            </div>
          </div>
        </Masonry>
      </ResponsiveMasonry>
      {/* Container */}
    </div>
  );
};

export default page;
