import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { ExperiencesSection } from "@/sections/ExperiencesSection";
import { GallerySection } from "@/sections/GallerySection";
import { HeroSection } from "@/sections/HeroSection";
import { RoomsSection } from "@/sections/RoomsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection />
        <div id="after-hero" className="h-px w-full scroll-mt-0" aria-hidden />
        <RoomsSection />
        <GallerySection />
        <ExperiencesSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
