import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Breadcrumb from '@/components/Common/Breadcrumb';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Botlet.IO - Bridging Users and Systems',
  description: 'Discover how Botlet.IO is revolutionizing the way users interact with systems through innovative solutions. Learn about our mission, team, and the technology that drives us.',
  keywords: 'Botlet.IO, about Botlet, user-system interaction, technology, innovation, team',
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
