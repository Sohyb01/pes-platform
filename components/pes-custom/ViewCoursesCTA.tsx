import Link from "next/link";
import React from "react";

const ViewCoursesCTA = () => {
  return (
    <Link href={"/courses"} className="btn-secondary text-subtle">
      View Courses
    </Link>
  );
};

export default ViewCoursesCTA;
