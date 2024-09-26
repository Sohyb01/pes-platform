import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const FAQSection = () => {
  return (
    <section>
      <div className="container flex flex-col items-center gap-10 text-foreground section-px py-[100px]">
        <h2 className="text-h2">
          Your Questions{" "}
          <span className="relative">
            Answered
            <Image
              src="/graphics/artwork/Questions.webp"
              width={32}
              height={32}
              alt="Answering"
              className="absolute right-[-40px] top-[4px] pointer-events-none"
            />
          </span>
        </h2>
        {/* Questions container */}
        <Accordion
          type="multiple"
          className="w-full flex flex-col gap-8 gap-y-4 items-center justify-center lg:grid lg:grid-cols-2"
        >
          <AccordionItem
            className="mb-auto w-full py-3 border-t-[1px] border-b-[1px] border-r-0 border-l-0 border-solid border-border"
            value="item-1"
          >
            <AccordionTrigger className="text-subtle-semibold p-0 text-start mr-2">
              What is Programmer&apos;s Elite School?
            </AccordionTrigger>
            <AccordionContent className="text-subtle pt-2 text-start">
              Programmer&apos;s Elite School is an educational organization
              dedicated to teaching modern technologies, programming, robotics,
              and artificial intelligence to children in schools and university
              students. Our mission is to empower the next generation with the
              skills and knowledge they need to thrive in the digital age.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="mb-auto w-full py-3 border-t-[1px] border-b-[1px] border-r-0 border-l-0 border-solid border-border"
            value="item-2"
          >
            <AccordionTrigger className="text-subtle-semibold p-0 text-start mr-2">
              How can I enroll in PES courses?
            </AccordionTrigger>
            <AccordionContent className="text-subtle pt-2 text-start">
              You can enroll by contacting us through our contact page,
              messaging us on Whatsapp, or calling us at +2 012 2111 6633
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="mb-auto w-full py-3 border-t-[1px] border-b-[1px] border-r-0 border-l-0 border-solid border-border"
            value="item-3"
          >
            <AccordionTrigger className="text-subtle-semibold p-0 text-start mr-2">
              Who can enroll in PES courses?
            </AccordionTrigger>
            <AccordionContent className="text-subtle pt-2 text-start">
              Our courses are designed for a wide range of students, from
              children in schools to university students. We tailor our
              curriculum to meet the educational needs of each age group and
              skill level, ensuring a comprehensive learning experience for all.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="mb-auto w-full py-3 border-t-[1px] border-b-[1px] border-r-0 border-l-0 border-solid border-border"
            value="item-4"
          >
            <AccordionTrigger className="text-subtle-semibold p-0 text-start mr-2">
              What kind of courses does PES offer?
            </AccordionTrigger>
            <AccordionContent className="text-subtle pt-2 text-start">
              PES offers a variety of courses focusing on modern technologies,
              including programming languages (Python, Java, etc.), robotics,
              and artificial intelligence. Each course is designed to provide
              hands-on learning experiences through projects, workshops, and
              real-world applications.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="mb-auto w-full py-3 border-t-[1px] border-b-[1px] border-r-0 border-l-0 border-solid border-border"
            value="item-5"
          >
            <AccordionTrigger className="text-subtle-semibold p-0 text-start mr-2">
              How long do courses last, what is the time commitment?
            </AccordionTrigger>
            <AccordionContent className="text-subtle pt-2 text-start">
              Course durations vary, ranging from a few weeks to several months,
              depending on the complexity and depth of the topic. The time
              commitment typically ranges from 2 to 5 hours per week, including
              lectures, assignments, and projects.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="mb-auto w-full py-3 border-t-[1px] border-b-[1px] border-r-0 border-l-0 border-solid border-border"
            value="item-6"
          >
            <AccordionTrigger className="text-subtle-semibold p-0 text-start mr-2">
              Will I receive a certificate upon completion of a course?
            </AccordionTrigger>
            <AccordionContent className="text-subtle pt-2 text-start">
              Yes, upon successfully completing a course, students will receive
              a certificate of completion from PES. This certificate can be
              added to your resume and LinkedIn profile to showcase your new
              skills.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* <div className="flex flex-wrap gap-8 items-center justify-center lg:grid lg:grid-cols-3 max-w-screen-md lg:max-w-none"></div> */}
      </div>
    </section>
  );
};

export default FAQSection;
