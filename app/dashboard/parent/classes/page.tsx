import { exampleClasses, exampleStudents } from "@/lib/data";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PESClassCard from "@/components/pes-custom/platform-components/PESClassCard";

async function getData() {
  // Fetch data from your API here.
  return exampleStudents;
}

const page = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Omar&apos;s Classes</h3>
      {/* Tabs */}
      <Tabs defaultValue="Active Classes" className="w-full">
        <TabsList className="flex gap-4 bg-transparent border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger className="tab-trigger" value="Active Classes">
            Active Classes
          </TabsTrigger>
          <TabsTrigger className="tab-trigger" value="Past Classes">
            Past Classes
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Active Classes">
          <div className="flex gap-4 flex-wrap">
            {exampleClasses.map((pesClass, idx) => {
              return <PESClassCard pesClass={pesClass} key={idx} />;
            })}
          </div>
        </TabsContent>
        <TabsContent value="Past Classes">
          <div className="flex gap-4 flex-wrap">
            {exampleClasses.map((pesClass, idx) => {
              return <PESClassCard pesClass={pesClass} key={idx} />;
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
