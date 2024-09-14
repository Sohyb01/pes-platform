import * as React from "react";
import { SVGProps } from "react";
const MenuDotsVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM12 20.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM12 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
  </svg>
);
export { MenuDotsVerticalIcon };
