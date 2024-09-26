import FranchisePageForm from "@/components/pes-custom/FranchisePageForm";
import React from "react";

const FranchisesPage = () => {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row justify-between items-start text-start section-px pt-[140px] pb-[80px] text-foreground">
        <FranchisePageForm />
      </div>
    </section>
  );
};

export default FranchisesPage;
