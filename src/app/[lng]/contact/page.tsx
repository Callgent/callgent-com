import Breadcrumb from '@/components/Common/Breadcrumb';
import Contact from '@/components/Contact';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Botlet.IO - Connect with Our Team',
  description: 'Reach out to the Botlet.IO team for inquiries, support, or feedback. Find our email, phone number, and fill out the contact form to get in touch with us directly.',
  keywords: 'Botlet.IO, contact, support, feedback, get in touch, customer service',
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
