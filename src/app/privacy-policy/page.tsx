import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Privacy Policy
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 mb-10">
              Last updated: April 1, 2024
            </p>
          </div>
          <div className="mt-12">
            <h3 className="mt-8 text-2xl font-bold">Information We Collect</h3>
            <p className="mt-4 text-gray-500">
              We may collect personal information such as your name, email address, and other contact information when you use our services or contact us through our GitHub repository.
            </p>
            <h3 className="mt-8 text-2xl font-bold">How We Use Your Information</h3>
            <p className="mt-4 text-gray-500">
              We use your personal information to provide and improve our services, respond to your inquiries, and send you administrative or promotional communications.
            </p>
            <h3 className="mt-8 text-2xl font-bold">Information Sharing and Disclosure</h3>
            <p className="mt-4 text-gray-500">
              We may share your personal information with third-party service providers who assist us in providing our services, or as required by law. We will not sell or rent your personal information to third parties for marketing purposes without your consent.
            </p>
            <h3 className="mt-8 text-2xl font-bold">Cookies and Other Technologies</h3>
            <p className="mt-4 text-gray-500">
              We may use cookies and other technologies to collect information about your use of our services and to improve your experience.
            </p>
            <h3 className="mt-8 text-2xl font-bold">Data Security</h3>
            <p className="mt-4 text-gray-500">
              We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage can be guaranteed to be 100% secure.
            </p>
            <h3 className="mt-8 text-2xl font-bold">Your Rights</h3>
            <p className="mt-4 text-gray-500">
              You have the right to access, correct, or delete your personal information that we have collected. You may also have the right to object to or restrict certain types of processing of your personal information.
            </p>
            <h3 className="mt-8 text-2xl font-bold">Contact Us</h3>
            <p className="mt-4 text-gray-500">
              If you have any questions or concerns about our privacy policy, or if you would like to exercise your rights with respect to your personal information, please contact us through our GitHub repository at <a href="https://github.com/Callgent/callgent-com" className="text-blue-500 underline">https://github.com/Callgent/callgent-com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
