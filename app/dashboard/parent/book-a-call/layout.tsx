import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

const BookACallLayout = ({
  bookASession,
  mySessions,
}: {
  bookASession: ReactNode;
  mySessions: ReactNode;
}) => {
  return (
    <section className="dashboard-tab-wrapper">
      <div className="space-y-1">
        <h2 className="text-h2 pb-4">Book a Call 📱</h2>
        <p className="text-muted-foreground">
          Get help from our expert instructors through quick calls or scheduled
          sessions.
        </p>
      </div>
      <Tabs defaultValue="Book a Session">
        <TabsList className="bg-transparent flex gap-4 border-b-[1px] border-b-muted rounded-none mb-4 justify-start flex-wrap h-fit">
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-transparent tab-trigger"
            value="Book a Session"
          >
            Book a Session
          </TabsTrigger>
          <TabsTrigger
            className="bg-transparent data-[state=active]:bg-transparent tab-trigger"
            value="My Sessions"
          >
            My Sessions
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Book a Session">{bookASession}</TabsContent>
        <TabsContent value="My Sessions">{mySessions}</TabsContent>
      </Tabs>
    </section>
  );
};

export default BookACallLayout;
