import FranchisePageForm from "@/components/pes-custom/forms/FormPendingFranchise";
import React from "react";

const FranchisesPage = () => {
  return (
    <section>
      <div className="container flex flex-col items-start text-start section-px py-20 text-foreground gap-10">
        <h1 className="text-h1">Apply to franchise with PES</h1>
        <p className="text-p">
          Fill out the form below and we will get back to you soon
        </p>
        <FranchisePageForm />
      </div>
    </section>
  );
};

export default FranchisesPage;
