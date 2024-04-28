import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Hgallery from "@/components/Hgallery";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <HeroSection />
        <Hgallery />

    </main>
  );
}
