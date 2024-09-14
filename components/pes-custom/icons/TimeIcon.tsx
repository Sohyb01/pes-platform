import * as React from "react";
import { SVGProps } from "react";
const TimeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      d="M9 2h6M12 10v4M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
    />
  </svg>
);
export { TimeIcon };
