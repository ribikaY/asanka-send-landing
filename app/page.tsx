import Footer from "@/components/shared/Footer";
import Download from "@/components/sections/Download";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import FloatingOrb from "@/components/shared/FloatingOrb";
import WhereItWorks from "@/components/sections/WhereItWorks";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
    return (
        <main className="font-sans overflow-hidden relative z-10">
            <div className="bioluminescent-bg" />
            <FloatingOrb />
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
