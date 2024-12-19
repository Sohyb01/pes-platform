import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Award, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Perfect Score!",
    description: "Achieved 100% in Advanced Mathematics Quiz",
    date: "Dec 10, 2024",
    subject: "Advanced Mathematics",
  },
  {
    id: 2,
    title: "Speed Demon",
    description: "Completed all assignments before deadline",
    date: "Dec 8, 2024",
    subject: "Introduction to Computer Science",
  },
];

const Achievements = async () => {
  const recentAchievements = ACHIEVEMENTS.splice(0, 6);

  return (
    <section className="dashboard-tab-wrapper">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-h2">Achievements 🏆</h2>
          <Card className="flex-1 bg-background h-64">
            <CardHeader>
              <div className="justify-between items-center flex gap-4">
                <h4 className="text-h4">Recent Achievements</h4>
                <Link
                  href="achievements/all-achievements"
                  className={cn(buttonVariants({ size: "sm" }), "group")}
                >
                  View All
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="max-w-[75vw] sm:max-w-[80vw] gap-4 overflow-x-scroll flex pr-4">
                {recentAchievements.map((achievement) => (
                  <Card key={achievement.id}>
                    <CardHeader>
                      <CardTitle>{achievement.title}</CardTitle>
                      <span className="text-muted-foreground">
                        {achievement.description}
                      </span>
                    </CardHeader>
                    <CardFooter className="grid grid-cols-2 gap-4 text-muted-foreground text-detail">
                      <p>{achievement.subject}</p>
                      <p className="flex items-center gap-2">
                        <Calendar size={16} />
                        {achievement.date}
                      </p>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-h2">Badges 🥇</div>
          <Card className="bg-background flex-1">
            <CardHeader>
              <div className="justify-between items-center flex gap-4">
                <h4 className="text-h4">Recent Badges</h4>
                <Link
                  href="achievements/all-badges"
                  className={cn(buttonVariants({ size: "sm" }), "group")}
                >
                  View All
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="max-w-[75vw] sm:max-w-[80vw] md:w-full p-4 flex gap-6 overflow-x-scroll [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                {[...new Array(6)].fill(0).map((_, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center bg-shade border rounded-full p-4">
                      <Award size={64} />
                    </div>
                    <h4 className="text-p_ui text-card-foreground">Badge</h4>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h2 className="text-h2">Certificates 📜</h2>
          <Card className="bg-background flex-1">
            <CardHeader>
              <div className="justify-between items-center flex gap-4">
                <h4 className="text-h4">Recent Certificates</h4>
                <Link
                  href="achievements/all-certificates"
                  className={cn(buttonVariants({ size: "sm" }), "group")}
                >
                  View All
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="max-h-[300px]">
              <div className="max-h-[280px] gap-4 overflow-x-scroll flex flex-col pr-4">
                {[...new Array(4)].fill(0).map((_, idx) => (
                  <Card className="" key={idx}>
                    <CardHeader>
                      <CardTitle>Certificate {idx + 1}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
