import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Hgallery from "@/components/Hgallery";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-200/[0.96] antialiased bg-grid-white/[0.2]">
      
      <div>
        <HeroSection />
      </div>
      <div>
        <Hgallery />
      </div>
          
    </main>
  );
}
