import HeroSection from "./hero sections/HeroSection";
import BuildingConnectionSection from "./hero sections/BuildingConnectionSection";
import ShiningStarSection from "./hero sections/ShiningStarSection";
import FeaturesSection from "./hero sections/FeaturesSection";
import BuildingAuthoritySection from "./hero sections/BuildingAuthoritySection";
import KeepThemHookedSection from "./hero sections/KeepThemHookedSection";
import FAQSection from "./hero sections/FAQSection";
import TestimonialsSection from "./hero sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="w-full max-w-none overflow-hidden">
      <HeroSection />
      <BuildingConnectionSection />
      <TestimonialsSection />
      <ShiningStarSection />
      <FeaturesSection />
      <BuildingAuthoritySection />
      <KeepThemHookedSection />
      <FAQSection />
    </main>
  );
}
