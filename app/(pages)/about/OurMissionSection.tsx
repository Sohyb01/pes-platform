import MainCTALink from "@/components/pes-custom/MainCTALink";
import Image from "next/image";
import React from "react";

const OurMissionSection = () => {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-center text-start section-px py-[100px] text-foreground gap-y-20 gap-x-[128px]">
        {/* Image */}
        <div className="relative w-full lg:w-[448px] px-6 py-12 text-start grid place-items-center">
          <Image
            src="/stock/futuristic_kid.png"
            alt="Our Story"
            className="object-cover pointer-events-none rounded-md"
            fill
          />
          <p className="text-h1 text-white z-[1]">
            What started as a government-backed initiative...
            <br />
            <br /> Has now become a great movement towards modern education
          </p>
        </div>
        {/* Right Side Content */}
        <div className="relative flex flex-col lg:flex-col-reverse items-start text-start gap-10 w-full lg:max-w-[544px]">
          {/* Text Content */}
          <div className="flex flex-col items-start text-start gap-4 w-full">
            {/* Title */}
            <h2 className="text-h2">
              Our mission is to build a better future through excellent,
              transparent education
            </h2>
            {/* Text */}
            <p>
              We envision a world where education on modern technologies is
              available for families who want to invest in their kids and a
              better future
            </p>
            {/* CTAs */}
            <div className="flex gap-4 items-center w-full flex-wrap justify-start">
              <MainCTALink />
            </div>
          </div>
          {/* Image */}
          <div className="relative w-full aspect-[544/372]">
            <Image
              src="/photos/about_pes_3.png"
              alt="Our Story"
              className="object-cover pointer-events-none rounded-md"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
