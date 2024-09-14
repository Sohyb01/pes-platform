import * as React from "react";
import { SVGProps } from "react";
const MeetingIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path strokeLinecap="round" d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1" />
    <path strokeLinecap="round" d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
);
export { MeetingIcon };
