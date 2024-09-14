import * as React from "react";
import { SVGProps } from "react";
const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 13c3.6-8 14.4-8 18 0"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
    />
  </svg>
);
export { EyeIcon };
