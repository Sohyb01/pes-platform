import Link from "next/link";
import React from "react";
import { buttonVariants } from "../../ui/button";

const MainCTALink = () => {
  return (
    <Link href={"/contact"} className={buttonVariants({ variant: "default" })}>
      Join Free Session
    </Link>
  );
};

export default MainCTALink;
