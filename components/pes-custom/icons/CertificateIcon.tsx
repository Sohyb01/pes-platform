import * as React from "react";
import { SVGProps } from "react";
const CertificateIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M15.5 4H18a2 2 0 0 1 2 2v9"
    />
    <path
      strokeLinecap="round"
      d="M8 6.4V4.5a.5.5 0 0 1 .5-.5c.276 0 .504-.224.552-.496C9.2 2.652 9.774 1 12 1s2.8 1.652 2.948 2.504c.048.272.276.496.552.496a.5.5 0 0 1 .5.5v1.9a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.5 20.5 2 2 5-5" />
  </svg>
);
export { CertificateIcon };
