import SocialButtons from "@/components/pes-custom/SocialButtons";
import WhatsappCTAButton from "@/components/pes-custom/WhatsappCTAButton";
import Image from "next/image";
import React from "react";

const LetsEmbarkTogetherSection = () => {
  return (
    <section>
      <div className="container flex flex-col-reverse lg:flex-row justify-start items-start lg:justify-between lg:items-center text-start section-px py-[100px] text-foreground gap-y-20">
        {/* Image - LG */}
        <div className="relative w-full lg:w-[544px] aspect-[544/360]">
          <Image
            src="/stock/kid_studying.png"
            alt="Learn with PES"
            className="object-cover pointer-events-none rounded-md"
            fill
          />
        </div>
        {/* Text Content */}
        <div className="relative flex flex-col items-start text-start gap-10 max-w-[448px] w-full">
          {/* Title */}
          <h2 className="text-h2">
            Let’s embark on this tech adventure together!
          </h2>
          {/* Text */}
          <p>
            To learn more, register for classes, or if you just want to chat
            about how we can light up the tech spark in your child, reach out to
            us!
          </p>
          {/* CTAs */}
          <div className="flex gap-4 items-center w-full flex-wrap justify-start">
            <SocialButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsEmbarkTogetherSection;
