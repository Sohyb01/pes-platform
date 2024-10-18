import MainCTALink from "@/components/pes-custom/website-components/MainCTALink";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const FeaturesSection = () => {
  return (
    <section>
      <div className="container flex flex-col gap-10 items-center text-start section-px py-[100px] text-foreground">
        {/* Text Content */}
        <div className="relative flex flex-col items-center gap-10 max-w-[448px] w-full text-center">
          {/* Title */}
          <h2 className="text-h2 relative">
            Accredited Certificates,
            <br /> Fun Learning!
            <Image
              src="/graphics/artwork/King.webp"
              width={32}
              height={32}
              alt="Accredited"
              className="absolute left-[46%] top-[-32px] pointer-events-none"
            />
          </h2>
          {/* Text */}
          <p>
            With our courses, your children will learn the most modern and
            in-demand skills of the future in a fun way!
          </p>
          {/* Features List */}
          <div className="flex flex-row flex-wrap w-full gap-2 text-detail items-center justify-center">
            {/* Feature */}
            <div className="pes-feature">
              <Check size={16} />
              Live In-Person Sessions
            </div>
            {/* Feature */}
            <div className="pes-feature">
              <Check size={16} />
              Scheduled Reviews
            </div>
            {/* Feature */}
            <div className="pes-feature">
              <Check size={16} />
              Books & Worksheets
            </div>
            {/* Feature */}
            <div className="pes-feature">
              <Check size={16} />
              Accredited Certificates
            </div>
            {/* Feature */}
            <div className="pes-feature">
              <Check size={16} />
              Homework and Grading
            </div>
            {/* Feature */}
            <div className="pes-feature">
              <Check size={16} />
              24/7 Support
            </div>
            {/* Feature */}
            <div className="pes-feature">
              <Check size={16} />
              Progress Tracking
            </div>
            {/* Feature */}
            <div className="pes-feature">
              <Check size={16} />
              Practical Application
            </div>
          </div>
          {/* CTAs */}
          <div className="flex gap-4 items-center w-full flex-wrap justify-center">
            <MainCTALink />
            {/* <ViewCoursesCTA /> */}
          </div>
          {/* Left IMGS Column */}
          <div className="hidden absolute md:flex flex-col gap-4 w-[164px] lg:w-[256px] left-[-204px] lg:left-[-344px] top-4 lg:top-[-40px]">
            {/* Image Wrapper */}
            <div className="relative w-full aspect-square grid place-items-center text-center p-4">
              <p className="text-h4 text-primary-foreground z-[1]">
                Computer Fundamentals
              </p>
              <Image
                className="rounded-md"
                fill
                src="/stock/computer_fundamentals.png"
                alt="Computer Fundamentals"
              />
            </div>
            {/* Image Wrapper */}
            <div className="relative w-full aspect-square grid place-items-center text-center p-4">
              <p className="text-h4 text-primary-foreground z-[1]">
                Programming Basics
              </p>
              <Image
                className="rounded-md"
                fill
                src="/stock/programming_basics.png"
                alt="Programming Basics"
              />
            </div>
          </div>
          {/* Right IMGS Column */}
          <div className="hidden absolute md:flex flex-col gap-4 w-[164px] lg:w-[256px] right-[-204px] lg:right-[-344px] top-4 lg:top-[-40px]">
            {/* Image Wrapper */}
            <div className="relative w-full aspect-square grid place-items-center text-center p-4">
              <p className="text-h4 text-primary-foreground z-[1]">
                Robotics for Kids
              </p>
              <Image
                className="rounded-md"
                fill
                src="/stock/robotics_for_kids.png"
                alt="Robotics for Kids"
              />
            </div>
            {/* Image Wrapper */}
            <div className="relative w-full aspect-square grid place-items-center text-center p-4">
              <p className="text-h4 text-primary-foreground z-[1]">
                AI for Kids
              </p>
              <Image
                className="rounded-md"
                fill
                src="/stock/ai_for_kids.png"
                alt="AI for kids"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
