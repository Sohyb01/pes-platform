import Image from "next/image";
import React from "react";

const ProblemsWeSolveSection = () => {
  return (
    <section>
      <div className="container flex flex-col items-center section-px py-[100px] text-foreground gap-10">
        <h2 className="text-h2">
          Problems We{" "}
          <span className="relative">
            Solve
            <Image
              src="/graphics/artwork/AI.webp"
              width={32}
              height={32}
              alt="AI"
              className="absolute right-[-40px] top-[0px] pointer-events-none"
            />
          </span>
        </h2>
        {/* Values Container */}
        <div className="w-full gap-4 flex flex-wrap lg:flex-nowrap justify-center">
          {/* Value */}
          <div className="problem-solution-column flex flex-col w-full max-w-[332px] lg:max-w-[352px]">
            <div className="pes-problem">
              <span className="font-bold">
                Kids Struggling to Engage with Traditional Learning:{" "}
              </span>
              Traditional education often fails to capture the imagination and
              interest of children, leading to disengagement.
            </div>
            <div className="pes-solution">
              <h3 className="text-h4">Our Solution</h3>
              <p>
                We make learning fun and interactive, using programming and
                modern skills as a gateway to spark curiosity and a love for
                learning.
                <br />
                <br />
                Your child will be engaged through hands-on projects and
                real-world applications, making every lesson something to look
                forward to.
              </p>
            </div>
          </div>
          {/* Value */}
          <div className="problem-solution-column flex flex-col w-full max-w-[332px] lg:max-w-[352px]">
            <div className="pes-problem">
              <span className="font-bold">
                Worried About Your Child’s Future in a Tech-Driven World:{" "}
              </span>
              The digital age is evolving rapidly, and preparing your child for
              the future can feel overwhelming.
            </div>
            <div className="pes-solution">
              <h3 className="text-h4">Our Solution</h3>
              <p>
                We equip your child with critical tech skills that are essential
                for tomorrow’s world.
                <br />
                <br />
                We are completely transparent and share all information with you
                as a parent, so you can see your child’s progress and learning
                journey and be confident in their future
              </p>
            </div>
          </div>
          <div className="problem-solution-column flex flex-col w-full max-w-[332px] lg:max-w-[352px]">
            <div className="pes-problem">
              <span className="font-bold">
                Difficulty Finding Quality, Accredited Educational Resources you
                can trust:{" "}
              </span>
              High-quality educational resources can be scarce or may not suit
              your child’s learning style, and other schools may not be
              completely transparent and honest with you as a parent
            </div>
            <div className="pes-solution">
              <h3 className="text-h4">Our Solution</h3>
              <p>
                Our programs are designed with ease of understanding and quality
                in mind, tailored to school-aged children.
                <br />
                <br />
                We provide a supportive environment where learning is
                personalized and group size is limited, ensuring your child
                receives the attention and resources they need to thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolveSection;
