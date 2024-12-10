import { exampleStudents } from "@/lib/data";
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
      <h3 className="text-h3">Students</h3>
      {/* Tabs */}
      <Tabs defaultValue="Group A" className="w-full">
        <TabsList className="flex gap-4 bg-background border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger className="tab-trigger" value="Group A">
            Group A
          </TabsTrigger>
          <TabsTrigger className="tab-trigger" value="Group B">
            Group B
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Group A">
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
        <TabsContent value="Group B">
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
      </Tabs>
    </div>
  );
};

export default page;
