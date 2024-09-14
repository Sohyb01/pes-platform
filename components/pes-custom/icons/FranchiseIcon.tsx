import * as React from "react";
import { SVGProps } from "react";
const FranchiseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    strokeWidth={1.8}
    className="pes-svg"
    fill="none"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.333 6.564c-.666-.615-2.444-.82-2.444.41 0 1.231 2.444.616 2.444 1.847 0 1.23-2 1.23-2.666.41M8 9.801v.866M8 6.075v-.742M1.333 5.333 7.821 2.09a.4.4 0 0 1 .358 0l6.488 3.244"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.333 7.333v5.334c0 .736-.597 1.333-1.333 1.333H4a1.333 1.333 0 0 1-1.333-1.333V7.333"
    />
  </svg>
);
export { FranchiseIcon };
