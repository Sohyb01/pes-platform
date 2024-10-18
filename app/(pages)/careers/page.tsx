import FormPendingInstructor from "@/components/pes-custom/forms/FormPendingInstructor";
import React from "react";

const CareersPage = () => {
  return (
    <section>
      <div className="container flex flex-col items-start text-start section-px py-20 text-foreground gap-8">
        <h1 className="text-h1">Apply for a role at PES</h1>
        <FormPendingInstructor />
      </div>
    </section>
  );
};

export default CareersPage;
