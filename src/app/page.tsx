import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import ProblemSection from "@/components/ProblemSection";
import QuoteSection from "@/components/QuoteSection";
import CoreFeatures from "@/components/CoreFeatures";
import ProductShowcase from "@/components/ProductShowcase";
import Platforms from "@/components/Platforms";
import WaitlistSection from "@/components/WaitlistSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <ProblemSection />
      <CoreFeatures />
      <ProductShowcase />
      <Platforms />
      <QuoteSection />
      <WaitlistSection />
      <FinalCTA />
      <Footer />
    </>
  );
}
