import ArrowLink from "@/components/pes-custom/platform-components/ArrowLink";
import PESCertificateCard from "@/components/pes-custom/platform-components/PESCertificateCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { exampleCertificates } from "@/lib/data";
import { Book, Calendar, Medal, Trophy } from "lucide-react";

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
  const recentAchievement = ACHIEVEMENTS[0];

  return (
    <section className="dashboard-tab-wrapper">
      {/* Hero */}
      <h2 className="mb-4 text-h2">
        Great job, Omar! Here&apos;s what you&apos;ve accomplished! 🎊
      </h2>

      {/* Achievements */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <div className="justify-between items-center flex gap-4">
            <h3 className="text-h3">Achievements 🏆</h3>
          </div>

          <div className="space-y-2">
            <p className="text-muted-foreground">
              12 of 34 Achievements Earned
            </p>
            <div className="flex items-center gap-2">
              <Progress className="h-2 bg-muted" value={(12 / 34) * 100} />
              <p>{Math.floor((12 / 34) * 100)}%</p>
            </div>
          </div>

          {/* Latest Achievement */}
          <Card className="bg-background w-full">
            <CardHeader className="text-h3">Recent Achievement</CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center gap-4">
              <div className="p-8 size-40">
                <Trophy className="stroke-secondary size-full" />
              </div>
              <div className="space-y-2">
                <h4 className="text-h4">{recentAchievement.title}</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>{recentAchievement.description}</p>
                  <p className="flex items-center gap-2">
                    <Calendar size={16} />
                    {recentAchievement.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Book size={16} />
                    {recentAchievement.subject}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Badges */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-h3">Badges 🏅</h3>
            <ArrowLink href="achievements/all-badges">View All</ArrowLink>
          </div>

          <div className="space-y-2">
            <p className="text-muted-foreground">10 of 24 Badges Unlocked</p>
            <div className="flex items-center gap-2">
              <Progress className="h-2 bg-muted" value={(12 / 34) * 100} />
              <p>{Math.floor((12 / 34) * 100)}%</p>
            </div>
          </div>

          {/* Latest Badge */}
          <Card className="bg-background w-full">
            <CardHeader className="text-h3">Latest Unlocked Badge</CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center gap-4">
              <div className="p-8 size-40">
                <Medal className="stroke-secondary size-full" />
              </div>
              <div className="space-y-2">
                <h4 className="text-h4">The Perfect Student</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Didn&apos;t miss a lesson in Intro to Computers</p>
                  <p className="flex items-center gap-2">
                    <Calendar size={16} />
                    {recentAchievement.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Book size={16} />
                    Intro to Computers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certificates */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-h3">Certificates 📜</h3>
          <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {exampleCertificates.map((certificate, idx) => {
              return <PESCertificateCard certificate={certificate} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
