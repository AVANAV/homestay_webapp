import { HeroSection } from "@/sections/HeroSection";
import { RoomsSection } from "@/sections/RoomsSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <div id="after-hero" className="h-px w-full scroll-mt-0" aria-hidden />
      <RoomsSection />
    </main>
  );
}
