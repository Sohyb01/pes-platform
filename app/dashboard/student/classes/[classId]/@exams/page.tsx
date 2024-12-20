import PESExamCard from "@/components/pes-custom/platform-components/PESExamCard";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { exampleExams } from "@/lib/data";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { compareAsc, compareDesc, isSameHour } from "date-fns";
import { ChevronsUpDown } from "lucide-react";

const getExams = async () => {
  return exampleExams;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getActiveExams = async () => {
  return exampleExams.filter((exam) => isSameHour(exam.timestamp, new Date()));
};

const getUpcomingExams = async () => {
  return exampleExams.filter(
    (exam) => compareAsc(new Date(), exam.timestamp) === 1
  );
};

const getPastExams = async () => {
  return exampleExams.filter(
    (exam) => compareDesc(new Date(), exam.timestamp) === 1
  );
};

interface ExamsProps {
  params: {
    classId: string;
  };
}

const Exams = async ({ params: { classId } }: ExamsProps) => {
  const exams = await getExams();
  const pastExams = await getPastExams();
  const upcomingExams = await getUpcomingExams();

  return (
    <div className="px-4 h-[68vh] overflow-y-scroll flex flex-col gap-8">
      {/* Active Exams */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">Active Exams</h3>
          <CollapsibleTrigger asChild>
            <Button size="icon">
              <ChevronsUpDown size={24} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {exams.map((exam, idx) => {
              return (
                <PESExamCard
                  status="active"
                  examLink={`${classId}/exam/${exam.id}`}
                  exam={exam}
                  key={idx}
                />
              );
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Upcoming Exams */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">Upcoming Exams</h3>
          <CollapsibleTrigger asChild>
            <Button size="icon">
              <ChevronsUpDown size={24} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {upcomingExams.map((exam, idx) => {
              return <PESExamCard status="upcoming" exam={exam} key={idx} />;
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Past Exams */}
      <Collapsible defaultOpen>
        <div className="flex item-center justify-between mb-4">
          <h3 className="text-h3">Past Exams</h3>
          <CollapsibleTrigger asChild>
            <Button size="icon">
              <ChevronsUpDown size={24} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
            {pastExams.map((exam, idx) => {
              return (
                <PESExamCard
                  feedbackLink={`${classId}/feedback`}
                  status="past"
                  grade={{ value: 31, isPending: false }}
                  exam={exam}
                  key={idx}
                />
              );
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Exams;
