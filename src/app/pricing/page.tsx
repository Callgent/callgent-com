import { Metadata } from "next";
import Pricing from "@/components/Pricing/index";

export const metadata: Metadata = {
  title: "Pricing - Service as a Callgent",
  description:
    "Explore our pricing plans and choose the one that suits you best. There is generous Free Plan for individuals and small businesses!",
  keywords: [
    "API Service Automation",
    "Unified System Integration",
    "AI-driven API tools",
    "customizable integration services",
    "integration platform as a service",
    "no-code API integration",
    "smart automation tools",
    "Cloud-based integration services",
    "Free Plan",
    "small businesses",
  ],
  // other metadata
};

const PricingPage = () => {
  return (
    <>
      <Pricing />
    </>
  );
};

export default PricingPage;
