import Footer from "@/components/shared/Footer";
import Download from "@/components/sections/Download";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import WhereItWorks from "@/components/sections/WhereItWorks";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main className="font-sans">
        <Hero />
        <WhyUs />
        <Features />
        <Download />
        <WhereItWorks />
        <FAQ />
        <HowItWorks />
        <Footer />
    </main>
  );
}
