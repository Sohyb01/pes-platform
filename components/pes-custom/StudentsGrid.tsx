"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const StudentsGrid = () => {
  return (
    <div
      className="w-full grid grid-cols-3 lg:grid-cols-4 grid-flow-row md:absolute md:top-[9px] lg:static lg:grid md:left-[50vw] gap-2 md:w-[406px] lg:w-[640px]"
      style={{ left: "calc(480px - 7vw)" }}
    >
      {/* Graphic 1 Wrapper */}
      <div className="w-full h-full aspect-square rounded-md hidden lg:grid place-items-center">
        {/* Student Img */}
        <Image
          width={80}
          height={80}
          alt="Studying Student"
          src="/graphics/artwork/Benefit.webp"
        />
      </div>
      {/* Student Img Wrapper */}
      <div className="relative w-full h-full aspect-square">
        {/* Student Img */}
        <Image
          className="rounded-md"
          fill
          alt="Studying Student"
          src="/photos/pes-students/course_student_1.png"
        />
      </div>
      {/* Student Img Wrapper */}
      <div className="relative w-full h-full aspect-square">
        {/* Student Img */}
        <Image
          className="rounded-md"
          fill
          alt="Studying Student"
          src="/photos/pes-students/course_student_2.png"
        />
      </div>
      {/* Student Img Wrapper */}
      <div className="relative w-full h-full aspect-square">
        {/* Student Img */}
        <Image
          className="rounded-md"
          fill
          alt="Studying Student"
          src="/photos/pes-students/course_student_3.png"
        />
      </div>
      {/* Student Img Wrapper */}
      <div className="relative w-full h-full aspect-square">
        {/* Student Img */}
        <Image
          className="rounded-md"
          fill
          alt="Studying Student"
          src="/photos/pes-students/course_student_4.png"
        />
      </div>
      {/* Student Img Wrapper */}
      <div className="relative w-full h-full aspect-square">
        {/* Student Img */}
        <Image
          className="rounded-md"
          fill
          alt="Studying Student"
          src="/photos/pes-students/course_student_5.png"
        />
      </div>
      {/* Text Wrapper */}
      <div className="w-full h-full aspect-square hidden lg:grid place-items-center">
        <p className="text-center">Photos from our Sessions</p>
      </div>
      {/* Student Img Wrapper */}
      <div className="relative w-full h-full aspect-square">
        {/* Student Img */}
        <Image
          className="rounded-md"
          fill
          alt="Studying Student"
          src="/photos/pes-students/course_student_6.png"
        />
      </div>
      {/* Graphic 2 Wrapper */}
      <div className="w-full h-full rounded-md aspect-square hidden lg:grid place-items-center">
        {/* Student Img */}
        <Image
          width={80}
          height={80}
          alt="Studying Student"
          src="/graphics/artwork/Learning.webp"
        />
      </div>
      {/* Student Img Wrapper */}
      <div className="relative w-full h-full aspect-square">
        {/* Student Img */}
        <Image
          className="rounded-md"
          fill
          alt="Studying Student"
          src="/photos/pes-students/course_student_7.png"
        />
      </div>
      {/* Student Img Wrapper */}
      <div className="relative w-full h-full aspect-square">
        {/* Student Img */}
        <Image
          className="rounded-md"
          fill
          alt="Studying Student"
          src="/photos/pes-students/course_student_8.png"
        />
      </div>
      {/* Student Img Wrapper */}
      <div className="relative w-full h-full aspect-square">
        {/* Student Img */}
        <Image
          className="rounded-md"
          fill
          alt="Studying Student"
          src="/photos/pes-students/course_student_9.png"
        />
      </div>
    </div>
  );
};

export default StudentsGrid;
