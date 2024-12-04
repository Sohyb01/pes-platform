import Leaderboard from "@/components/pes-custom/platform-components/Leaderboard";
import { leaderboardData } from "@/lib/data";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3 pb-4">Leaderboard 🏅</h3>
      <Tabs defaultValue="Weekly" className="w-full">
        <TabsList className="flex gap-2 max-w-[300px] p-2 h-fit border-border border-[1px] mb-4 bg-background">
          <TabsTrigger
            className="data-[state=active]:bg-primary bg-muted border-border border-[1px] w-full"
            value="Weekly"
          >
            Weekly
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary bg-muted border-border border-[1px] w-full"
            value="Monthly"
          >
            Monthly
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Weekly">
          <Leaderboard students={leaderboardData} variant="week" />
        </TabsContent>
        <TabsContent value="Monthly">
          <Leaderboard students={leaderboardData} variant="month" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
