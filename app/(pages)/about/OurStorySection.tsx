import SocialButtons from "@/components/pes-custom/website-components/SocialButtons";
import Image from "next/image";
import React from "react";

const OurStorySection = () => {
  return (
    <section>
      <div className="container flex flex-col-reverse lg:flex-row justify-start items-start lg:justify-between lg:items-center text-start section-px py-[100px] text-foreground gap-y-20">
        {/* Text Content */}
        <div className="relative flex flex-col items-start text-start gap-10 max-w-[448px] w-full">
          {/* Title */}
          <h2 className="text-h2">
            Our{" "}
            <span className="relative">
              Story
              <Image
                src="/graphics/artwork/Happy.webp"
                width={32}
                height={32}
                alt="Happy"
                className="absolute right-[-40px] top-[4px] pointer-events-none"
              />
            </span>
          </h2>
          {/* Text */}
          <p>
            PES was founded in 2022 with one goal in mind - To build a better
            future by providing bright young students with great education on
            modern technologies
            <br />
            <br />
            From our humble beginnings with only a few small groups of students,
            to partnering with schools, branching out, and sharing our mission
            with more and more people, we’ve always put the future of our
            students at the forefront of everything we do
          </p>
          {/* CTAs */}
          <div className="flex gap-4 items-center w-full flex-wrap justify-start">
            <SocialButtons />
          </div>
        </div>
        {/* Image - LG */}
        <div className="relative w-full lg:w-[544px] aspect-[544/408]">
          <Image
            src="/photos/about_pes_2.png"
            alt="Our Story"
            className="object-cover pointer-events-none rounded-md"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
