'use client';

import { useState, useEffect } from 'react';

const NewsLatterBox = () => {
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const iframe = document.getElementById('the_iframe');
    const handleIframeLoad = () => {
      setStatus('Please check your email to confirm the subscription link.');
      setIsSubmitting(false);
    };
    iframe.addEventListener('load', handleIframeLoad);
    return () => {
      iframe.removeEventListener('load', handleIframeLoad);
    };
  }, []);

  return (
    <div className="relative rounded-lg bg-white px-8 py-8 shadow-lg dark:bg-gray-800 sm:p-12 lg:px-10 xl:p-12">
      <div className="flex justify-between flex-col-reverse xl:flex-row xl:flex-wrap ">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
            Subscribe
          </h2>
          <p className="mb-12 text-base font-medium text-body-color">
            Stay updated with our latest news and offers directly in your inbox.
          </p>
        </div>
      </div>
      <form
        id="sib-form"
        method="POST"
        target="the_iframe"
        action="https://722998d0.sibforms.com/serve/MUIFAGYzcmiXd_afTJDIcKu-P6nE8QpukoqOh_G8ULC43Cy2iDRLtM-hcSPkTHVCoSfODzAZKKjDmXyxF5yItljsSkjnlefFAYEiXk57_xDMP0ZaBCgTgtOGJg4dC83MfzPLGihGyi3mRaq3-Y8fio61mG2S4g97-Bma0zB2uMvkqSrseF4huyv0Ol6wYKGQFVOtqlfafOSVDTw7"
        onSubmit={() => { setIsSubmitting(true); setStatus(""); }}
      >
        <div className="space-y-4">
          <label
            htmlFor="EMAIL"
            className="block text-lg font-semibold text-gray-800 dark:text-white"
          >
            Enter your email address to subscribe
          </label>
          <input
            type="email"
            id="EMAIL"
            name="EMAIL"
            autoComplete="off"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" />
        </div>

        <div className="flex items-start space-x-3 mt-4">
          <input
            type="checkbox"
            value="1"
            id="OPT_IN"
            name="OPT_IN"
            required
            checked={optIn}
            onChange={() => setOptIn(!optIn)}
            className="h-5 w-5 text-indigo-600 border-gray-300 dark:border-gray-600 rounded focus:ring-indigo-500"
          />
          <label
            htmlFor="OPT_IN"
            className="block text-base font-medium text-gray-800 dark:text-gray-300"
          >
            I agree to receive your newsletters and accept the data privacy statement.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-6 w-full py-3 px-6 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}      >
          SUBSCRIBE
        </button>

        <input type="hidden" name="locale" value="en" />
        <input type="hidden" name="html_type" value="simple" />

        <iframe
          id="the_iframe"
          name="the_iframe"
          className="hidden"
        ></iframe>

        {status && <p className="mt-4 text-base text-green-600 dark:text-green-400">{status}</p>}
      </form>
    </div>

  );
};

export default NewsLatterBox;
