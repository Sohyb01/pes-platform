import * as React from "react";
import { SVGProps } from "react";
const PartnershipIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 9v6M3 15V9M12 21v-6M12 3v6M12 15 3 9l9-6 9 6-9 6Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 21-9-6 9-6 9 6-9 6Z"
    />
  </svg>
);
export { PartnershipIcon };
