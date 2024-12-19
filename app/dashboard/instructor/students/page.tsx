import { exampleClasses, exampleStudents } from "@/lib/data";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { VariantSlideInUp } from "@/lib/motion-constants";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

async function getData() {
  // Fetch data from your API here.
  return exampleStudents;
}

const page = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Students by Class</h3>
      {/* Tabs */}
      <Tabs defaultValue="Group A" className="w-full flex flex-wrap gap-8">
        <TabsList className="flex gap-2 bg-background rounded-none items-start h-fit flex-col">
          {exampleClasses.map((pesClass, idx) => {
            return (
              <TabsTrigger
                key={idx}
                className="tab-trigger text-start w-full justify-start"
                value={pesClass.class_name}
              >
                {pesClass.class_name}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {exampleClasses.map((pesClass, idx) => {
          return (
            <TabsContent key={idx} value={pesClass.class_name}>
              <div className="flex gap-4 flex-wrap">
                {exampleStudents.map((student, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={`/dashboard/instructor/students/${student.id}`}
                    >
                      <M_Card
                        variants={VariantSlideInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: idx * 0.05 }} // Custom delay for each item
                        className="items-center border-primary/50 hover:border-primary duration-100"
                      >
                        <CardHeader className="pb-4">
                          <CardTitle className="flex justify-between text-subtle">
                            <Avatar className="w-[150px] h-[150px] rounded-none">
                              <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                              />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-subtle">
                          {student.student_name}
                        </CardContent>
                      </M_Card>
                    </Link>
                  );
                })}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default page;
