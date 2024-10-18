import MainCTALink from "@/components/pes-custom/website-components/MainCTALink";
import Image from "next/image";
import React from "react";

const BuildingAuthoritySection = () => {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-center text-start section-px py-[100px] text-foreground">
        {/* Text Content */}
        <div className="relative flex flex-col items-start text-start gap-10 max-w-[448px] w-full">
          {/* Title */}
          <h2 className="text-h2">
            We’ve helped 100s of students improve their skills & get{" "}
            <span className="relative">
              certified
              <Image
                src="/graphics/artwork/Growing.webp"
                width={32}
                height={32}
                alt="Growing"
                className="absolute right-[-40px] top-[4px] pointer-events-none"
              />
            </span>
          </h2>
          {/* Text */}
          <p>
            When choosing our instructors, we make sure to select the most
            knowledgeable & qualified people to do the job effectively.
            <br />
            <br />
            Our Instructors are all Engineers with degrees in Computer Science,
            Robotics, and Artificial Intelligence, are are also great at
            teaching!
          </p>
          {/* CTAs */}
          <div className="flex gap-4 items-center w-full flex-wrap justify-start">
            <MainCTALink />
            {/* <ViewCoursesCTA /> */}
          </div>
          {/* Image - MD */}
          <Image
            width={232}
            height={412}
            src="/graphics/pes_achievements_vertical.png"
            alt="Study Future Skills"
            className="absolute lg:hidden left-[480px] bottom-0 pointer-events-none"
          />
        </div>
        {/* Image - LG */}
        <div className="relative w-[544px] aspect-[544/588] hidden lg:block">
          <Image
            src="/graphics/pes_achievements_horizontal.png"
            alt="Study Future Skills"
            className="object-cover pointer-events-none"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default BuildingAuthoritySection;
