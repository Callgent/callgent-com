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
  icons: [
    {
      url: process.env.NEXT_PUBLIC_SITE_ROOT + "/images/logo/logo.svg",
      type: "image/svg+xml",
    },
  ],
  description:
    "Revolutionize system integration with Callgent's AI-driven agent tools. Automate APIs, Slack, Emails, and more efficiently!",
  keywords: [
    "API Service Automation",
    "Integration Platform as a Service",
    "no-code API integration",
    "smart automation tools",
    "Cloud-based integration services",
    "Multi-platform integration solutions",
    "User as a Service",
    "Service as a User",
    "iPaaS",
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
