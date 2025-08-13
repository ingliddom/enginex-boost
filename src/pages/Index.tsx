import UrgencyBanner from "../components/UrgencyBanner";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import ProgressBar from "../components/ProgressBar";
import PriceComparison from "../components/PriceComparison";
import ToolsGrid from "../components/ToolsGrid";
import Testimonials from "../components/Testimonials";
import PricingPlans from "../components/PricingPlans";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBanner />
      <Hero />
      <VideoSection />
      <ProgressBar />
      <PriceComparison />
      <ToolsGrid />
      <Testimonials />
      <PricingPlans />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
