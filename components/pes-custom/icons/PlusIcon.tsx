import * as React from "react";
import { SVGProps } from "react";
const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 12h6m6 0h-6m0 0V6m0 6v6"
    />
  </svg>
);
export { PlusIcon };
