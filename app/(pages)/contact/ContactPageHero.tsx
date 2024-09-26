import ContactPageForm from "@/components/pes-custom/ContactPageForm";
import React from "react";

const ContactPageHero = () => {
  return (
    <section className="w-full">
      <div className="container flex flex-col items-start section-px py-[100px] text-foreground gap-10">
        <h1 className="text-h1">
          Hello awesome parent!
          <br /> Ready to invest in the future?
        </h1>
        <ContactPageForm />
      </div>
    </section>
  );
};

export default ContactPageHero;
