import * as React from "react";
import { SVGProps } from "react";
const JoinArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    className="pes-svg"
    fill="none"
    strokeWidth={1.8}
    color="#000"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 10H8c-8 0-8 11 0 11m14-11-7-7m7 7-7 7"
    />
  </svg>
);
export { JoinArrowIcon };
