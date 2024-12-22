import { VariantSlideInUp } from "@/lib/motion-constants";
import { M_Card } from "@/components/pes-custom/motion/Shadcn-Motion-Components";
import { CardHeader, CardTitle } from "@/components/ui/card";

const AllCertificates = () => {
  return (
    <section className="dashboard-tab-wrapper">
      <h2 className="text-h2">All Certificates</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...new Array(4)].fill(0).map((_, idx) => (
          <M_Card
            variants={VariantSlideInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: idx * 0.05 }} // Custom delay for each item
            key={idx}
          >
            <CardHeader>
              <CardTitle>Certificate {idx + 1}</CardTitle>
            </CardHeader>
          </M_Card>
        ))}
      </div>
    </section>
  );
};

export default AllCertificates;
