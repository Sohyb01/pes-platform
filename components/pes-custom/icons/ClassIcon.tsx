import * as React from "react";
import { SVGProps } from "react";
const ClassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    strokeWidth={1.8}
    color="#000"
    viewBox="0 0 24 24"
    className={"pes-svg"}
    {...props}
  >
    <path
      strokeLinecap="round"
      d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114M6 17h14M6 21h14"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 21a2 2 0 1 1 0-4"
    />
    <path strokeLinecap="round" d="M9 7h6" />
  </svg>
);
export { ClassIcon };
