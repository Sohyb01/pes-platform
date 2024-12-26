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
      <h3 className="text-h3">Your Classes 📚</h3>
      {/* Tabs */}
      <Tabs defaultValue="Active Classes" className="w-full">
        <TabsList className="hidden md:flex bg-transparent gap-4 pb-2 border-b-[1px] border-muted-foreground/50 rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-primary data-[state=active]:text-white text-muted-foreground gap-2"
            value="Active Classes"
          >
            Active Classes
          </TabsTrigger>
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-primary data-[state=active]:text-white text-muted-foreground gap-2"
            value="Past Classes"
          >
            Past Classes
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Active Classes">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {exampleClasses
              .filter((c) => new Date() <= c.classenddate)
              .map((pesClass, idx) => {
                return <PESClassCard pesClass={pesClass} key={idx} />;
              })}
          </div>
        </TabsContent>
        <TabsContent value="Past Classes">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {exampleClasses
              .filter((c) => new Date() > c.classenddate)
              .map((pesClass, idx) => {
                return <PESClassCard pesClass={pesClass} key={idx} />;
              })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
