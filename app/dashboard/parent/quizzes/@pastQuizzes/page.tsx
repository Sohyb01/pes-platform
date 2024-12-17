import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { exampleClasses } from "@/lib/data";
import { ArrowRight, SquareCode, User } from "lucide-react";
import Link from "next/link";

const getClasses = async () => {
  return exampleClasses;
};

const Classes = async () => {
  const classes = await getClasses();

  return (
    <div className="space-y-4">
      <h3 className="text-h3">Choose a Course</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((classs) => (
          <Link key={classs.id} href={`quizzes/${classs.id}`}>
            <Card className="bg-background group hover:border-primary transition">
              <CardHeader>
                <CardTitle className="text-h3 flex items-center justify-between">
                  <span className="group-hover:text-primary transition">
                    {classs.class_name}
                  </span>
                  <ArrowRight
                    className="group-hover:translate-x-1 group-hover:stroke-primary transition"
                    size={24}
                  />
                </CardTitle>
                <CardDescription className="flex gap-2 items-center">
                  <span className="inline-flex items-center gap-1 font-bold">
                    <SquareCode size={16} />
                    Program :
                  </span>{" "}
                  {classs.program_id}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground flex flex-col gap-2">
                  <p className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 font-bold">
                      <User size={16} />
                      Instructor :
                    </span>{" "}
                    {classs.instructor_id}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Classes;
