import MainCTALink from "@/components/pes-custom/MainCTALink";
import Image from "next/image";
import React from "react";

const partnerLogoImgs = [
  "/graphics/logos/client1.png",
  "/graphics/logos/client2.png",
  "/graphics/logos/client3.png",
  "/graphics/logos/client4.png",
  "/graphics/logos/client5.png",
  "/graphics/logos/client6.png",
  "/graphics/logos/client7.png",
  "/graphics/logos/client8.png",
];

const AboutHeroSection = () => {
  return (
    <>
      {/* Core Hero */}
      <section>
        <div className="container flex flex-col lg:flex-row justify-between items-start lg:items-center text-start section-px pt-[140px] pb-[80px] text-foreground">
          {/* Text Content */}
          <div className="relative flex flex-col items-start text-start gap-10 max-w-[448px] w-full">
            {/* Title */}
            <h1 className="text-h1">
              We love helping you build a better future for your{" "}
              <span className="relative">
                kids
                <Image
                  src="/graphics/artwork/Growth.webp"
                  width={48}
                  height={48}
                  alt="Growing"
                  className="absolute right-[-48px] top-[8px] pointer-events-none"
                />
              </span>
            </h1>
            {/* Text */}
            <p>
              At PES, we understand how much you care about your kid’s future.
              Every day, we meet people just like you who are looking for a way
              to help their kids be ready for the future and learn valuable
              modern skills
              <br />
              <br />
              That’s why we’ve dedicated ourselves to providing the best courses
              and education in the industry, so you can achieve a better future
              for your kids!
            </p>
            {/* CTAs */}
            <div className="flex gap-4 items-center w-full flex-wrap justify-start">
              <MainCTALink />
              {/* <ViewCoursesCTA /> */}
            </div>
            {/* Image - MD (Absolute) */}
            <Image
              width={290}
              height={442}
              src="/graphics/pes_hero_vertical.png"
              alt="Future"
              className="absolute lg:hidden left-[480px] pointer-events-none rounded-md"
            />
          </div>
          {/* Image - LG */}
          <div className="relative w-[544px] aspect-[544/408] hidden lg:block">
            <Image
              src="/photos/about_pes_hero.png"
              alt="About us"
              className="object-cover pointer-events-none rounded-md"
              fill
            />
          </div>
        </div>
      </section>
      {/* Logos */}
      <section>
        <div className="container section-px pb-[32px]">
          <div className="flex flex-col md:flex-row items-center text-start gap-y-8 gap-x-4 border-solid border-t-[1px] border-neutral-200 pt-8">
            <p className="text-subtle-medium text-muted-foreground text-center md:text-start w-full md:w-[160px]">
              Our partners and clients include
            </p>
            <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-x-8 md:gap-x-[60px] lg:gap-x-0 gap-y-4">
              {partnerLogoImgs.map((img, index) => (
                <div
                  key={index}
                  className="grid place-items-center min-w-[80px] aspect-[2/1] w-full max-w-[80px]"
                >
                  <div className="relative h-[40px] aspect-[2/1]">
                    <Image
                      src={img}
                      alt="Trusted Partner"
                      fill
                      className="object-contain opacity-[60%]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeroSection;
