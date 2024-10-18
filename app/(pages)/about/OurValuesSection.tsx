import MainCTALink from "@/components/pes-custom/website-components/MainCTALink";
import WhatsappCTAButton from "@/components/pes-custom/website-components/WhatsappCTAButton";
import Image from "next/image";
import React from "react";

export const OurValuesSection = () => {
  return (
    <section>
      <div className="container flex flex-col items-center section-px py-[100px] text-foreground gap-10">
        <h2 className="text-h2">
          Our{" "}
          <span className="relative">
            Values
            <Image
              src="/graphics/artwork/Innovation.webp"
              width={32}
              height={32}
              alt="Innovation"
              className="absolute right-[-40px] top-[0px] pointer-events-none"
            />
          </span>
        </h2>
        {/* Values Container */}
        <div className="w-full gap-4 flex flex-wrap lg:flex-nowrap justify-center">
          <div className="pes-value z-[1]">
            {/* Value Image */}
            <Image
              src="/graphics/artwork/Safety.webp"
              alt="Happy value"
              width={32}
              height={32}
            />
            {/* Text Content */}
            <div className="flex flex-col gap-2 w-full">
              <p className="text-h3 text-foreground">Transparency</p>
              <p className="text-subtle text-foreground">
                We share all materials with parents, as well as our students’
                roadmaps and progress. We are always available to answer any
                questions you have!
              </p>
            </div>
          </div>
          <div className="pes-value z-[1]">
            {/* Value Image */}
            <Image
              src="/graphics/artwork/Modern.webp"
              alt="Happy value"
              width={32}
              height={32}
            />
            {/* Text Content */}
            <div className="flex flex-col gap-2 w-full">
              <p className="text-h3 text-foreground">Innovation</p>
              <p className="text-subtle text-foreground">
                We push our students to be creative and give them the
                opportunity to innovate with new projects. The most innovative
                are rewarded!
              </p>
            </div>
          </div>
          <div className="pes-value z-[1]">
            {/* Value Image */}
            <Image
              src="/graphics/artwork/Trust.webp"
              alt="Happy value"
              width={32}
              height={32}
            />
            {/* Text Content */}
            <div className="flex flex-col gap-2 w-full">
              <p className="text-h3 text-foreground">Empowerment</p>
              <p className="text-subtle text-foreground">
                We empower our students, giving them the tools and resources
                they need to improve and innovate as far as their imagination
                takes them!
              </p>
            </div>
          </div>
        </div>
        {/* CTAs */}
        <div className="flex gap-4 items-center justify-center w-full flex-wrap">
          <MainCTALink />
          <WhatsappCTAButton />
        </div>
      </div>
    </section>
  );
};
