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

const HeroSection = () => {
  return (
    <>
      {/* Core Hero */}
      <section>
        <div className="container flex flex-col lg:flex-row justify-between items-start text-start section-px pt-[140px] pb-[80px] text-foreground">
          {/* Text Content */}
          <div className="relative flex flex-col items-start text-start gap-10 max-w-[448px] w-full">
            {/* Title */}
            <h1 className="text-h1 relative">
              The Most Advanced Robotics & AI School For{" "}
              <span className="relative">
                Kids
                <Image
                  src="/graphics/artwork/Computer.webp"
                  width={32}
                  height={32}
                  alt="Computer"
                  className="absolute right-[-40px] top-[16px] pointer-events-none"
                />
              </span>
            </h1>
            {/* Text */}
            <p>
              Your children deserve a high-quality education that teaches them
              in-demand skills and technologies and helps them succeed in the
              future
              <br />
              <br />
              We specialize in teaching kids the most modern skills, such as
              Programming, Robotics, and Artificial Intelligence. Have your
              child join a free session today!
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
              alt="Education"
              className="absolute lg:hidden left-[480px] pointer-events-none rounded-md"
            />
          </div>
          {/* Image - LG */}
          <div className="relative w-[544px] aspect-[544/432] hidden lg:block">
            <Image
              src="/stock/happy_future_girl.png"
              alt="Education"
              className="object-cover pointer-events-none rounded-md"
              fill
            />
            {/* Sticker */}
            <Image
              src="/graphics/artwork/Future.webp"
              width={128}
              height={128}
              alt="Future"
              className="absolute top-[-64px] left-[-64px] pointer-events-none"
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

export default HeroSection;
