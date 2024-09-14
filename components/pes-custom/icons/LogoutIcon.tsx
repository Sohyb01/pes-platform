import * as React from "react";
import { SVGProps } from "react";
const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12h7m0 0-3 3m3-3-3-3M19 6V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
    />
  </svg>
);
export { LogoutIcon };
