import PESCertificateCard from "@/components/pes-custom/platform-components/PESCertificateCard";
import { exampleCertificates } from "@/lib/data";
import * as React from "react";

const page = () => {
  return (
    <div className="dashboard-tab-wrapper">
      <h3 className="text-h3">Certificates 📜</h3>
      {/* Container */}
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
        {exampleCertificates.map((certificate, idx) => {
          return <PESCertificateCard certificate={certificate} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default page;
