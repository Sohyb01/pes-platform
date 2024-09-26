import MainCTALink from "@/components/pes-custom/MainCTALink";
import SocialButtons from "@/components/pes-custom/SocialButtons";
import Image from "next/image";
import React from "react";

const KeepThemHookedSection = () => {
  return (
    <section>
      <div className="container flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-center text-start section-px py-[100px] text-foreground gap-y-20">
        {/* Text Content */}
        <div className="relative flex flex-col items-start text-start gap-10 max-w-[448px] w-full">
          {/* Title */}
          <h2 className="text-h2">
            Still not sure?
            <br /> Try two sessions for{" "}
            <span className="relative">
              free!
              <Image
                src="/graphics/artwork/Algorithms.webp"
                width={32}
                height={32}
                alt="Algorithms"
                className="absolute right-[-40px] top-[4px] pointer-events-none"
              />
            </span>
          </h2>
          {/* Text */}
          <p>
            We want to treat our customers as fairly as possible, so we invite
            you to have your children attend two FREE Sessions to show you that
            we’re the right match for you!
          </p>
          {/* CTAs */}
          <div className="flex gap-4 items-center w-full flex-wrap justify-start">
            <MainCTALink />
            <SocialButtons />
            {/* <ViewCoursesCTA /> */}
          </div>
          {/* Image - MD */}
          <Image
            width={232}
            height={360}
            src="/graphics/testimonials_graphic.png"
            alt="Study Future Skills"
            className="absolute lg:hidden left-[480px] top-[-48px] pointer-events-none"
          />
        </div>
        {/* Testimonials - MD, LG */}
        <div className="flex flex-wrap lg:flex-col gap-0 lg:gap-y-2 w-full justify-center lg:max-w-[544px] relative">
          {/* Testimonial */}
          <div className="pes-testimonial z-[1]">
            {/* Testimonial Image */}
            <Image
              className="rounded-full"
              src="/stock/happy_parent_1.png"
              alt="Happy Testimonial"
              width={60}
              height={60}
            />
            {/* Text Content */}
            <div className="flex flex-col gap-2 w-full">
              <span className="text-subtle-semibold text-foreground">
                Mohamed&apos;s Mom
              </span>
              <span className="text-subtle text-foreground italic">
                “Learning to use computers has been so good for my son”
              </span>
              <span className="text-detail text-slate-500">December 2023</span>
            </div>
          </div>
          {/* Testimonial */}
          <div className="pes-testimonial z-[1] lg:ml-auto">
            {/* Testimonial Image */}
            <Image
              className="rounded-full"
              src="/stock/happy_parent_2.png"
              alt="Happy Testimonial"
              width={60}
              height={60}
            />
            {/* Text Content */}
            <div className="flex flex-col gap-2 w-full">
              <span className="text-subtle-semibold text-foreground">
                Sherry&apos;s Dad
              </span>
              <span className="text-subtle text-foreground italic">
                “She is learning robotics and she loves it!”
              </span>
              <span className="text-detail text-slate-500">March 2024</span>
            </div>
          </div>
          {/* Testimonial */}
          <div className="pes-testimonial z-[1]">
            {/* Testimonial Image */}
            <Image
              className="rounded-full"
              src="/stock/happy_parent_3.png"
              alt="Happy Testimonial"
              width={60}
              height={60}
            />
            {/* Text Content */}
            <div className="flex flex-col gap-2 w-full">
              <span className="text-subtle-semibold text-foreground">
                Loay&apos;s Mom
              </span>
              <span className="text-subtle text-foreground italic">
                “He is coding games and apps on his own, I can’t believe it!”
              </span>
              <span className="text-detail text-slate-500">May 2024</span>
            </div>
          </div>
          {/* BG Swirl */}
          <Image
            src="/graphics/testimonial_swirl.svg"
            alt="Testimonials"
            fill
            className="hidden lg:block object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default KeepThemHookedSection;
