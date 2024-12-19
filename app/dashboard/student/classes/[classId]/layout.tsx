import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessagesSquare, SquareChartGantt } from "lucide-react";
import { ReactNode } from "react";

const ClassLayout = ({
  overview,
  chat,
  exams,
  assignments,
  material,
}: {
  overview: ReactNode;
  chat: ReactNode;
  exams: ReactNode;
  assignments: ReactNode;
  material: ReactNode;
}) => {
  return (
    <section className="relative dashboard-tab-wrapper">
      <h2 className="text-h2">Your Classes 📚</h2>
      <Tabs defaultValue="overview" className="md:block">
        {/* Medium Screens TabList */}
        <TabsList className="hidden md:flex bg-transparent gap-4 border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-transparent gap-2 tab-trigger"
            value="overview"
          >
            <SquareChartGantt size={16} />
            Overview
          </TabsTrigger>
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-transparent gap-2 tab-trigger"
            value="chat"
          >
            <MessagesSquare size={16} />
            Chat
          </TabsTrigger>
        </TabsList>

        {/* Mobile Tabs */}
        <TabsList className="md:hidden fixed mb-4 bottom-0 left-1/2 -translate-x-1/2 gap-4 bg-background px-4">
          <TabsTrigger
            className="data-[state=active]:bg-primary"
            value="overview"
          >
            <SquareChartGantt size={24} />
          </TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-primary" value="chat">
            <MessagesSquare size={24} />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">{overview}</TabsContent>
        <TabsContent value="chat">{chat}</TabsContent>
      </Tabs>
    </section>
  );
};

export default ClassLayout;
