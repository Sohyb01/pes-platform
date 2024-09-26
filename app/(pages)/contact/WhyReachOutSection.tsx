import Image from "next/image";
import React from "react";

const WhyReachOutSection = () => {
  return (
    <section>
      <div className="container flex flex-col items-center section-px py-[100px] text-foreground gap-10">
        <h2 className="text-h2">Why reach out to us?</h2>
        {/* Values Container */}
        <div className="w-full gap-4 lg:gap-8 flex flex-wrap lg:flex-nowrap justify-center">
          <div className="pes-value z-[1] relative">
            {/* Value Image */}
            <Image
              className="absolute top-2 right-2"
              src="/graphics/artwork/Creativity.webp"
              alt="Happy value"
              width={48}
              height={48}
            />
            {/* Text Content */}
            <div className="flex flex-col gap-2 w-full">
              <p className="text-h3 text-foreground">Expert Guidance</p>
              <p className="text-subtle text-foreground">
                Our instructors are tech enthusiasts and love teaching kids in
                the most engaging way.
              </p>
            </div>
          </div>
          <div className="pes-value z-[1] relative">
            {/* Value Image */}
            <Image
              className="absolute top-2 right-2"
              src="/graphics/artwork/Future.webp"
              alt="Happy value"
              width={48}
              height={48}
            />
            {/* Text Content */}
            <div className="flex flex-col gap-2 w-full">
              <p className="text-h3 text-foreground">Safe & Fun Environment</p>
              <p className="text-subtle text-foreground">
                We ensure your child not only learns but also has fun learning,
                all in a secure setting.
              </p>
            </div>
          </div>
          <div className="pes-value z-[1] relative">
            {/* Value Image */}
            <Image
              className="absolute top-2 right-2"
              src="/graphics/artwork/Skills.webp"
              alt="Happy value"
              width={48}
              height={48}
            />
            {/* Text Content */}
            <div className="flex flex-col gap-2 w-full">
              <p className="text-h3 text-foreground">Future-Ready Skills</p>
              <p className="text-subtle text-foreground">
                From coding to creating robots, we prepare your child for a
                tech-savvy future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyReachOutSection;
