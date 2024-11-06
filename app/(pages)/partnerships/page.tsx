import FormPendingPartnership from "@/components/pes-custom/forms/FormPendingPartnership";
import React from "react";

const PartnershipsPage = () => {
  return (
    <section>
      <div className="container flex flex-col items-start text-start section-px py-20 text-foreground gap-10">
        <h1 className="text-h1">Apply for a Partnership with PES</h1>
        <p className="text-p">
          Fill out the form below and we will get back to you soon
        </p>
        <FormPendingPartnership />
      </div>
    </section>
  );
};

export default PartnershipsPage;
