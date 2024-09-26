import React from "react";
import AboutHeroSection from "./AboutHeroSection";
import OurStorySection from "./OurStorySection";
import OurMissionSection from "./OurMissionSection";
import { OurValuesSection } from "./OurValuesSection";
import ProblemsWeSolveSection from "./ProblemsWeSolveSection";

export default function Page() {
  return (
    <main className="w-full max-w-none overflow-hidden">
      <AboutHeroSection />
      <OurStorySection />
      <OurMissionSection />
      <OurValuesSection />
      <ProblemsWeSolveSection />
    </main>
  );
}
