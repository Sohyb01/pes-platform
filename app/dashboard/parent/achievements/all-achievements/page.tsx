import { VariantSlideInUp } from "@/lib/motion-constants";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { AchievementsData } from "@/lib/data";

const AllAchievements = () => {
  return (
    <section className="dashboard-tab-wrapper">
      <h2 className="text-h2">All Achievements</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {AchievementsData.map((achievement, idx) => (
          <M_Card
            variants={VariantSlideInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: idx * 0.05 }} // Custom delay for each item
            key={idx}
          >
            <CardHeader>
              <CardTitle>{achievement.title}</CardTitle>
              <span className="text-muted-foreground">
                {achievement.description}
              </span>
            </CardHeader>
            <CardFooter className="grid grid-cols-2 gap-4 text-muted-foreground">
              <p>{achievement.subject}</p>
              <p className="flex items-center gap-2">
                <Calendar size={16} />
                {achievement.date}
              </p>
            </CardFooter>
          </M_Card>
        ))}
      </div>
    </section>
  );
};

export default AllAchievements;
