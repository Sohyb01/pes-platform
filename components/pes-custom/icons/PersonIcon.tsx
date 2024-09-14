import * as React from "react";
import { SVGProps } from "react";
const PersonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
);
export { PersonIcon };
