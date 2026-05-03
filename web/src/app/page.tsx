import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { FeaturedWork } from "@/components/featured-work";
import { AboutTeaser } from "@/components/about-teaser";
import { CTA } from "@/components/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedWork />
      <AboutTeaser />
      <CTA />
    </>
  );
}
