import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import AttendanceBarChart from "@/components/pes-custom/platform-components/AttendanceBarChart";
import { GradesAreaChart } from "@/components/pes-custom/platform-components/GradesAreaChart";
import { SkillsSpiderChart } from "@/components/pes-custom/platform-components/SkillsSpiderChart";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { exampleClasses } from "@/lib/data";
import { VariantSlideInUp } from "@/lib/motion-constants";
import Link from "next/link";

const getClasses = async () => {
  return exampleClasses;
};

const PerformanceInsights = async () => {
  const classes = await getClasses();
  return (
    <section className="dashboard-tab-wrapper">
      <div className="flex flex-col gap-4">
        <h2 className="text-h2">Courses Progress</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          {classes.map((pesClass, idx) => {
            const randomValue = Math.floor(Math.random() * 100);
            return (
              <M_Card
                variants={VariantSlideInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: idx * 0.05 }} // Custom delay for each item
                key={idx}
                className="lg:w-[32rem] bg-background"
              >
                <CardHeader>
                  <CardTitle className="text-nowrap">
                    📘 {pesClass.class_name}
                  </CardTitle>
                  <div className="w-full flex gap-1 flex-wrap justify-between items-center text-subtle pt-2">
                    <Link href="#">
                      <span className="max-w-[12ch] overflow-hidden">
                        ENG. Ahmed Reda
                      </span>
                    </Link>
                    <div className="text-muted-foreground">
                      {`${pesClass.classbegindate.getUTCDate()}/${
                        pesClass.classbegindate.getUTCMonth() + 1
                      }
-
${pesClass.classenddate.getUTCDate()}/${pesClass.classenddate.getUTCMonth() + 1}
`}
                    </div>
                  </div>
                </CardHeader>
                <CardFooter className="flex gap-2">
                  <Progress className="h-2 bg-muted" value={randomValue} />
                  <span className="text-muted-foreground">{randomValue}%</span>
                </CardFooter>
              </M_Card>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 flex-1 pt-4">
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-h3">Attendance</h3>
          <Card className="flex justify-center items-center flex-1 p-4">
            <AttendanceBarChart />
          </Card>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-h3">Average Grades (Month)</h3>
          <Card className="flex justify-center items-center flex-1 p-4">
            <GradesAreaChart className="min-h-[200px]" />
          </Card>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-h3">Skills Chart</h3>
          <Card className="flex justify-center items-center flex-1 p-4">
            <SkillsSpiderChart className="min-h-[250px] w-full" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PerformanceInsights;
