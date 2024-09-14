import * as React from "react";
import { SVGProps } from "react";
const EmployeeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    className={"pes-svg"}
    fill="none"
    strokeWidth={1.8}
    color="#000"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      className="stroke-inherit"
      strokeLinecap="round"
      d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1"
    />
    <path
      className="stroke-inherit"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      className="stroke-inherit"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6Z"
    />
  </svg>
);
export { EmployeeIcon as EmployeeIcon };
