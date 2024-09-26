import MainCTALink from "@/components/pes-custom/MainCTALink";
import StudentsGrid from "@/components/pes-custom/StudentsGrid";
import Image from "next/image";
import React from "react";

const ShiningStarSection = () => {
  return (
    <section>
      <div className="container relative flex flex-col gap-10 lg:flex-row justify-between items-start lg:items-center text-start section-px py-[100px] pb-[80px] text-foreground">
        {/* Text Content */}
        <div className="relative flex flex-col items-start text-start gap-10 w-full max-w-[448px] md:max-w-[300px]">
          {/* Title */}
          <h2 className="text-h1 w-full md:w-[274px]">
            Help your child become a shining{" "}
            <span className="relative">
              star
              <Image
                src="/graphics/artwork/Ideas.webp"
                width={32}
                height={32}
                alt="Bright Ideas"
                className="absolute right-[-40px] top-[16px] pointer-events-none"
              />
            </span>
          </h2>
          {/* CTAs */}
          <div className="flex gap-4 items-center w-full flex-wrap justify-start">
            <MainCTALink />
          </div>
        </div>
        <StudentsGrid />
      </div>
    </section>
  );
};

export default ShiningStarSection;
