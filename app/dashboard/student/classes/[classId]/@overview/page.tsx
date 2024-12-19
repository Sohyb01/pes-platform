import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  exampleAssignments,
  exampleExams,
  exampleSolvedExams,
  selectClassExampleData,
} from "@/lib/data";
import { TFormSchemaAddExam } from "@/lib/types-forms";
import { compareAsc, differenceInDays, format } from "date-fns";
import {
  Calendar,
  NotebookPen,
  NotebookText,
  TriangleAlert,
  User,
} from "lucide-react";

const getDueAssignments = async () => {
  return exampleAssignments.filter((assignment) => assignment.status === "due");
};

const getAssignments = async () => {
  return exampleAssignments;
};

const getDueExams = async () => {
  return exampleExams.filter(
    (exam) => compareAsc(exam.timestamp, new Date()) === 1
  );
};

const getExams = async () => {
  return exampleExams;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getCompletedExams = async () => {
  return exampleExams;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getExamClass = async (exam: TFormSchemaAddExam) => {
  const examClass = selectClassExampleData.find(
    (select_class) => select_class.id === exam.class_field
  );

  return examClass?.name;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getExamSubmissions = async () => {};

interface ClassOverviewProps {
  params: {
    classId: string;
  };
}

const ClassOverview = async ({ params: { classId } }: ClassOverviewProps) => {
  const assignments = await getAssignments();
  const dueAssignments = await getDueAssignments();
  const completedAssignments = assignments.filter(
    (assignment) => assignment.status === "submitted"
  );
  const assignmentsCompletionPercentage = Math.ceil(
    (completedAssignments.length / assignments.length) * 100
  );

  const exams = await getExams();
  const dueExams = await getDueExams();
  const class_name = selectClassExampleData.find(
    (select_class) => select_class.id === classId
  )?.name;
  const examsCompletionPercentage = Math.ceil(
    (exampleSolvedExams.length / exams.length) * 100
  );

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Announcements */}
      <div className="md:col-span-2 space-y-4 ">
        <h3 className="text-h3">Announcements</h3>
        <Card>
          <CardContent className="pt-2 divide-y space-y-4 h-[18rem] overflow-y-scroll">
            {[...new Array(4)].fill(0).map((_, idx) => (
              <div key={idx} className="py-2 flex items-center gap-4">
                <div className="shrink-0 size-12 p-2 rounded-full bg-muted">
                  <User className="size-full object-contain" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-h4">Instructor Name</h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Assignments Overview */}
      <div className="space-y-4">
        <h3 className="text-h3">Assignments ⏰</h3>
        <p className="text-muted-foreground">Completed Assignments</p>
        <div className="flex items-center gap-4">
          <Progress
            className="h-2 bg-muted"
            value={assignmentsCompletionPercentage}
          />
          <span className="shrink-0 text-nowrap">
            {assignmentsCompletionPercentage} %
          </span>
        </div>
        <Card>
          <CardHeader className="text-h3">Due Assignments</CardHeader>
          <CardContent className="divide-y space-y-4 h-[18rem] overflow-y-scroll">
            {dueAssignments.map((assignment) => (
              <div
                key={assignment.assignment_id}
                className="py-2 flex items-center gap-4"
              >
                <div className="hidden md:block shrink-0 size-12 p-2 rounded-full bg-muted">
                  <NotebookPen className="size-full object-contain" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-h4">{assignment.name}</h4>
                  <p className="text-muted-foreground">
                    {assignment.assignment_description}
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <Badge className="gap-2">
                      <Calendar size={16} />
                      Due{" "}
                      {format(assignment.assignment_duedate, "MMM dd, hh:mm a")}
                    </Badge>
                    <Badge variant="secondary" className="gap-2">
                      <TriangleAlert size={16} />
                      Due{" "}
                      {differenceInDays(
                        assignment.assignment_duedate,
                        new Date()
                      )}{" "}
                      Days
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Exams Overview */}
      <div className="space-y-4">
        <h3 className="text-h3">Exams 💯</h3>
        <p className="text-muted-foreground">Completed Exams</p>
        <div className="flex items-center gap-4">
          <Progress
            className="h-2 bg-muted"
            value={examsCompletionPercentage}
          />
          <span className="shrink-0 text-nowrap">
            {examsCompletionPercentage} %
          </span>
        </div>
        <Card>
          <CardHeader className="text-h3">Due Exams</CardHeader>
          <CardContent className="divide-y space-y-4 h-[18rem] overflow-y-scroll">
            {dueExams.map((exam) => (
              <div key={exam.id} className="py-2 flex items-center gap-4">
                <div className="hidden md:block shrink-0 size-12 p-2 rounded-full bg-muted">
                  <NotebookText className="size-full object-contain" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-h4">{exam.quizname}</h4>
                  <p className="text-muted-foreground">
                    {class_name || "Class Name"}
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <Badge className="gap-2">
                      <Calendar size={16} />
                      Due {format(exam.timestamp, "MMM dd, hh:mm a")}
                    </Badge>
                    <Badge variant="secondary" className="gap-2">
                      <TriangleAlert size={16} />
                      Due {differenceInDays(
                        exam.timestamp,
                        new Date()
                      )} Days
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClassOverview;
