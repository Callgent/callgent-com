import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import BotFlow from "@/components/BotFlow";
export const metadata: Metadata = {
  title: "Service as a Callgent - Break the silos among Users & Systems",
  applicationName: "Callgent",
  description:
    "Revolutionize system integration with Callgent's AI-driven agent tools. Automate APIs, Slack, Emails, and more efficiently!",
  keywords: [
    "API Service Automation",
    "Unified System Integration",
    "Scalable Service Solutions",
    "AI-driven API tools",
    "customizable integration services",
    "integration platform as a service",
    "no-code API integration",
    "smart automation tools",
    "Cloud-based integration services",
    "Multi-platform integration solutions",
  ],
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <BotFlow />
      <Features />
      {/* <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
