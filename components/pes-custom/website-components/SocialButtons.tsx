import { socialMedias } from "@/lib/website-constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialButtons = () => {
  return (
    <div className="flex gap-2">
      {socialMedias.map((social, idx) => {
        return (
          <Link key={idx} href={social.socialUrl} target="_blank">
            <Image
              src={social.imgUrl}
              height={30}
              width={30}
              alt={social.socialUrl}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialButtons;
