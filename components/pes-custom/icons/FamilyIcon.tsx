import * as React from "react";
import { SVGProps } from "react";
const FamilyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 21H7a4 4 0 0 1-4-4v-6.292a4 4 0 0 1 1.927-3.421l5-3.03a4 4 0 0 1 4.146 0l5 3.03A4 4 0 0 1 21 10.707V17a4 4 0 0 1-4 4h-2m-6 0v-4a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m-6 0h6"
    />
  </svg>
);
export { FamilyIcon };
