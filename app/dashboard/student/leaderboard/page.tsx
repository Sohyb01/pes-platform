import Leaderboard from "@/components/pes-custom/platform-components/Leaderboard";
import { leaderboardData } from "@/lib/data";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3 pb-4">Leaderboard 🏅</h3>
      {/* Tabs */}
      <Tabs defaultValue="Weekly" className="w-full">
        <TabsList className="flex gap-4 bg-transparent border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger
            className="tab-trigger data-[state=active]:bg-transparent"
            value="Weekly"
          >
            Weekly
          </TabsTrigger>
          <TabsTrigger
            className="tab-trigger data-[state=active]:bg-transparent"
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
