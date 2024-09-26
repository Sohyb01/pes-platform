import React from "react";
import ContactPageHero from "./ContactPageHero";
import LetsEmbarkTogetherSection from "./LetsEmbarkTogetherSection";
import WhyReachOutSection from "./WhyReachOutSection";

export default function Page() {
  return (
    <main className="w-full max-w-none overflow-hidden">
      <ContactPageHero />
      <LetsEmbarkTogetherSection />
      <WhyReachOutSection />
    </main>
  );
}
