import MainCTALink from "@/components/pes-custom/MainCTALink";
import WhatsappCTAButton from "@/components/pes-custom/WhatsappCTAButton";
import Image from "next/image";
import React from "react";

const BuildingConnectionSection = () => {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row-reverse justify-between items-start text-start section-px py-[100px] text-foreground">
        {/* Text Content */}
        <div className="relative flex flex-col items-start text-start gap-10 max-w-[448px] w-full">
          {/* Title */}
          <h2 className="text-h2">
            Your children’s education is the biggest investment you can make to
            help them succeed, and it’s time to{" "}
            <span className="relative">
              invest!
              <Image
                src="/graphics/artwork/Better.webp"
                width={32}
                height={32}
                alt="Improve"
                className="absolute right-[-40px] top-[8px] pointer-events-none"
              />
            </span>
          </h2>
          {/* Text */}
          <p>
            You care deeply about your kids and you want them to have the
            brightest future they can, but not having them learn the in-demand
            skills of the future will hold them back
            <br />
            <br />
            Its time to make a decision and invest in the future of your kids
            with accredited courses that will secure their future, and also make
            them love enjoy learning!
          </p>
          {/* CTAs */}
          <div className="flex gap-4 items-center w-full flex-wrap justify-start">
            <MainCTALink />
            <WhatsappCTAButton />
          </div>
          {/* Image - MD */}
          <Image
            width={300}
            height={460}
            src="/graphics/artwork/Technology.webp"
            alt="Study Future Skills"
            className="absolute lg:hidden left-[480px] bottom-0 pointer-events-none"
          />
        </div>
        {/* Image - LG */}
        <div className="relative w-[544px] aspect-[544/432] hidden lg:block">
          <Image
            src="/stock/future_study.png"
            alt="Study Future Skills"
            className="object-cover pointer-events-none"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default BuildingConnectionSection;
