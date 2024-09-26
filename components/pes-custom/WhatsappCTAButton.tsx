import { whatsappUrl } from "@/lib/website-constants";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import WhatsappIcon from "./icons/WhatsappIcon";

const WhatsappCTAButton = () => {
  return (
    <Link
      target="_blank"
      href={whatsappUrl}
      className={buttonVariants({ variant: "outline" })}
    >
      <WhatsappIcon />
      Talk to us
    </Link>
  );
};

export default WhatsappCTAButton;
