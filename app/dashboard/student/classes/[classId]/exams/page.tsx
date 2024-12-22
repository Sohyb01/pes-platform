import { getExams, getPastExams, getUpcomingExams } from "@/api/exams";
import PESExamCard from "@/components/pes-custom/platform-components/PESExamCard";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { ChevronUp } from "lucide-react";

interface ExamsProps {
  params: {
    classId: string;
  };
}

const Exams = async ({}: ExamsProps) => {
  const activeExams = [(await getExams())[0]];
  const pastExams = await getPastExams();
  const upcomingExams = await getUpcomingExams();

  return (
    <div className="px-4 h-[68vh] overflow-y-scroll flex flex-col gap-8">
      {/* Active Exams */}
      <Collapsible className="group" defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">
            Active Exams{" "}
            <span className="font-normal text-muted-foreground">
              ({activeExams.length})
            </span>
          </h3>
          <CollapsibleTrigger asChild>
            <Button size="icon">
              <ChevronUp
                className="group-data-[state=open]:rotate-180 transition-all"
                size={24}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          {activeExams.length === 0 ? (
            <h4 className="text-h4 text-muted-foreground text-center">
              No Active Exams
            </h4>
          ) : (
            <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
              {activeExams.map((exam, idx) => {
                return (
                  <PESExamCard
                    status="active"
                    examLink={`exams/${exam.id}`}
                    exam={exam}
                    key={idx}
                  />
                );
              })}
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>

      {/* Upcoming Exams */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">
            Upcoming Exams{" "}
            <span className="font-normal text-muted-foreground">
              ({upcomingExams.length})
            </span>
          </h3>
          <CollapsibleTrigger asChild>
            <Button size="icon">
              <ChevronUp
                className="group-data-[state=open]:rotate-180 transition-all"
                size={24}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          {upcomingExams.length === 0 ? (
            <h4 className="text-h4 text-muted-foreground text-center">
              No Upcoming Exams
            </h4>
          ) : (
            <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
              {upcomingExams.map((exam, idx) => {
                return <PESExamCard status="upcoming" exam={exam} key={idx} />;
              })}
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>

      {/* Past Exams */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">
            Past Exams{" "}
            <span className="font-normal text-muted-foreground">
              ({pastExams.length})
            </span>
          </h3>
          <CollapsibleTrigger asChild>
            <Button size="icon">
              <ChevronUp
                className="group-data-[state=open]:rotate-180 transition-all"
                size={24}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          {pastExams.length === 0 ? (
            <h4 className="text-h4 text-muted-foreground text-center">
              No Past Exams
            </h4>
          ) : (
            <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
              {pastExams.map((exam, idx) => {
                return (
                  <PESExamCard
                    feedbackLink={`exams/feedback/${exam.id}`}
                    status="past"
                    grade={{ value: 31, isPending: false }}
                    exam={exam}
                    key={idx}
                  />
                );
              })}
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Exams;
