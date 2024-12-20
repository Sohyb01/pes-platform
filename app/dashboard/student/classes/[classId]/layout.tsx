import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ClipboardPen,
  MessagesSquare,
  NotepadText,
  SquareChartGantt,
} from "lucide-react";
import { ReactNode } from "react";

const ClassLayout = ({
  overview,
  chat,
  exams,
  assignments,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      {/* Should be overview if I forgot to reset it */}
      <Tabs defaultValue="assignments" className="md:block">
        {/* Medium Screens TabList */}
        <TabsList className="hidden md:flex bg-transparent gap-4 pb-2 border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-primary gap-2"
            value="overview"
          >
            <SquareChartGantt size={16} />
            Overview
          </TabsTrigger>
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-primary gap-2"
            value="chat"
          >
            <MessagesSquare size={16} />
            Chat
          </TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-primary" value="exams">
            <ClipboardPen size={16} />
            Exams
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary"
            value="assignments"
          >
            <NotepadText size={16} />
            Assignments
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
          <TabsTrigger className="data-[state=active]:bg-primary" value="exams">
            <ClipboardPen size={24} />
          </TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <TabsContent value="overview">{overview}</TabsContent>
        <TabsContent value="chat">{chat}</TabsContent>
        <TabsContent value="exams">{exams}</TabsContent>
        <TabsContent value="exams">{assignments}</TabsContent>
      </Tabs>
    </section>
  );
};

export default ClassLayout;
