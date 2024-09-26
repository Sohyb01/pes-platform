import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialButtons from "./SocialButtons";

const Footer = () => {
  return (
    <section className="border-solid border-t-[1px] border-border w-full">
      <div className="px-4 md:px-8 lg:px-20 flex flex-col items-start text-start section-px pt-[100px] pb-8 text-foreground gap-y-20">
        {/* First Row - Logo & Links */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-y-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/svgs/pes-logo.svg"
              width={204}
              height={92}
              alt="Programmer's Elite School"
            />
          </Link>
          {/* Links */}
          <div className="grid grid-cols-1 gap-x-16 gap-y-6 text-detail">
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/reviews"
            >
              Reviews
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/gallery"
            >
              Gallery
            </Link>
          </div>
          {/* Links */}
          <div className="grid grid-cols-1 gap-x-16 gap-y-6 text-detail">
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/careers"
            >
              Careers
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/franchises"
            >
              Franchises
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/partnerships"
            >
              Partnerships
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/locations"
            >
              Locations
            </Link>
          </div>
          {/* Links */}
          <div className="grid grid-cols-1 gap-x-16 gap-y-6 text-detail">
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/roadmaps"
            >
              Roadmaps
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/tracks"
            >
              Tracks
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/leaderboard"
            >
              Leaderboard
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/certificates"
            >
              Certificate
            </Link>
          </div>
        </div>
        {/* Second Row - Legal & Socials */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-y-6 pt-6 border-solid border-t-[1px] border-border">
          {/* Other Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-detail">
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="/legal"
            >
              Legal
            </Link>
            <Link
              href="https://www.levarestudio.com/"
              target="_blank"
              className="underline text-muted-foreground hover:text-foreground"
            >
              Website by Levare Studio
            </Link>
          </div>
          {/* Socials */}
          <SocialButtons />
        </div>
      </div>
    </section>
  );
};

export default Footer;
