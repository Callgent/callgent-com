import React from 'react';

const TermsOfUse = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Terms of Use
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 mb-10">
              Last updated: April 1, 2024
            </p>
          </div>
          <div className="mt-12">
            <p className="text-xl text-gray-500">
              Welcome to our open-source robotics project. By using our project, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
            </p>
            <h3 className="mt-8 text-2xl font-bold">1. Acceptance of Terms</h3>
            <p className="mt-4 text-gray-500">
              By accessing or using our project, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you should not use or access our project.
            </p>
            <h3 className="mt-8 text-2xl font-bold">2. Description of Service</h3>
            <p className="mt-4 text-gray-500">
              Our project provides an open-source platform for robotics development. We offer resources such as code repositories, documentation, and community forums. Our project is provided on an "as is" and "as available" basis.
            </p>
            <h3 className="mt-8 text-2xl font-bold">3. Open Source License</h3>
            <p className="mt-4 text-gray-500">
              Our project is licensed under the terms of the <a href="https://github.com/Botlet-IO/botlet-io/blob/main/LICENSE" className="text-blue-600 underline">open-source license available here</a>. You may use, copy, modify, and distribute the project, including in commercial applications, subject to the terms of the license.
            </p>
            <h3 className="mt-8 text-2xl font-bold">4. User Conduct</h3>
            <p className="mt-4 text-gray-500">
              You agree to use our project responsibly and in accordance with all applicable laws. You are responsible for any contributions you make to the project, and you represent and warrant that you have the right to make such contributions.
            </p>
            <h3 className="mt-8 text-2xl font-bold">5. Disclaimer of Warranties</h3>
            <p className="mt-4 text-gray-500">
              Our project is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <h3 className="mt-8 text-2xl font-bold">6. Limitation of Liability</h3>
            <p className="mt-4 text-gray-500">
              In no event shall the project maintainers be liable for any claim, damages, or other liability arising from or related to your use of the project, whether under contract, tort, or any other theory of liability.
            </p>
            <h3 className="mt-8 text-2xl font-bold">7. Changes to Terms</h3>
            <p className="mt-4 text-gray-500">
              We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our project following the posting of changes will constitute your acceptance of such changes.
            </p>
            <h3 className="mt-8 text-2xl font-bold">8. Open Source Repository</h3>
            <p className="mt-4 text-gray-500">
              The open-source repository for our project is available at <a href="https://github.com/Botlet-IO/botlet-io" className="text-blue-600 underline">this link</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUse;
