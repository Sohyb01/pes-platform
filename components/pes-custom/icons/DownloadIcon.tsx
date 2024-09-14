import * as React from "react";
import { SVGProps } from "react";
const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 20h12M12 4v12m0 0 3.5-3.5M12 16l-3.5-3.5"
    />
  </svg>
);
export { DownloadIcon };
