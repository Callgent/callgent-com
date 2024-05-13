import Breadcrumb from '@/components/Common/Breadcrumb';
import Contact from '@/components/Contact';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect with Our Team - Service as a Callgent',
  description: 'Reach out to the Callgent team for inquiries, support, or feedback. Find our email, phone number, and fill out the contact form to get in touch with us directly.',
  keywords: 'Callgent, contact, support, feedback, get in touch, customer service',
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
