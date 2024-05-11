import React from 'react';

const RefundPolicy = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Refund Policy
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 mb-10">
              Last updated: April 1, 2024
            </p>
          </div>
          <div className="mt-12">
            <h3 className="mt-8 text-2xl font-bold">No Refunds</h3>
            <p className="mt-4 text-gray-500">
              Our robot services are provided on an "as is" and "as available" basis. Since our services are digital and intangible, we generally do not offer refunds once the service has been provided.
            </p>
            <h3 className="mt-8 text-2xl font-bold">Special Circumstances</h3>
            <p className="mt-4 text-gray-500">
              In certain special circumstances, we may consider refund requests. If we approve a refund request, we will delete the robot services and issue a refund to the original payment method.
            </p>
            <h3 className="mt-8 text-2xl font-bold">Contact Us</h3>
            <p className="mt-4 text-gray-500">
              If you have any questions or concerns about our refund policy, or if you would like to request a refund, please contact us through our GitHub repository at <a href="https://github.com/Callgent/callgent-com" className="text-blue-500 underline">https://github.com/Callgent/callgent-com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
