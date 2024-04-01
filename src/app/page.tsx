import Blog from '@/components/Blog';
import ScrollUp from '@/components/Common/ScrollUp';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import { Metadata } from 'next';
import BotFlow from '@/components/BotFlow';
export const metadata: Metadata = {
  title: 'Break the silos between Users & Systems',
  description: 'User-as-a-Service v.v., Service-as-a-User',
  // other metadata
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

