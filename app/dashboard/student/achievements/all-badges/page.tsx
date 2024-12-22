import { Award } from "lucide-react";

const AllBadges = () => {
  return (
    <section className="dashboard-tab-wrapper">
      <h2 className="text-h2">All Badges</h2>
      <div className="flex gap-8 flex-wrap">
        {[...new Array(6)].fill(0).map((_, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center bg-shade border rounded-full p-4">
              <Award size={64} />
            </div>
            <h4 className="text-p_ui text-card-foreground">Badge</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBadges;
