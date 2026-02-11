'use client';

import Script from 'next/script';
import { useState, useEffect } from 'react';

export default function NewsletterBox() {
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  useEffect(() => {
    (window as any).handleCaptchaResponse = function (token: string) {
      setCaptchaToken(token);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus("Please complete the captcha first.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    const payload = {
      EMAIL: email,
      OPT_IN: optIn ? "1" : "0",
      "cf-turnstile-response": captchaToken, // Turnstile token
    };

    try {
      const res = await fetch(
        "https://722998d0.sibforms.com/serve/MUIFANiMObhCU_8ZgPwhLakxIvJBMQdZYI44jWEyKXsQG0kFASKxSgn-R-TR5X-wABEOTfJxHZ_7-deKt5ggMhm7czBL0JrI9pX0XuRp8CEdJgl-xKmpeV8rCur4-w9TcfaxYVhU099M8C4QMdWGPCOjcd3agHCAmxonpmECoeGuuVfgs9_v7_l5tLNBHosFdLh3mKQyLACDUyXg?isAjax=1",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(payload).toString(),
        }
      );

      const data = await res.json();
      if (data.success && data.message) {
        setStatus(data.message);
        setEmail("");
        setOptIn(false);
        setCaptchaToken(null);
        if ((window as any).turnstile) {
          (window as any).turnstile.reset("#sib-captcha");
        }
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
        setStatus("Your subscription could not be saved. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setIsSuccess(false);
      setStatus("Network error. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative rounded-sm bg-white px-8 py-8 shadow-lg dark:bg-gray-dark sm:p-12 lg:px-10 xl:p-12 lg:mb-5 mb-12 lg:h-[35rem]">
      <div className="flex justify-between flex-col-reverse xl:flex-row xl:flex-wrap ">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-4 text-base font-medium text-body-color">
            Stay updated with our latest news and offers directly in your inbox.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="EMAIL"
            className="block font-semibold text-gray-800 dark:text-white mb-1"
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
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          />
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
            I agree to receive newsletters and accept the privacy policy.
          </label>
        </div>

        <div className="sib-captcha sib-form-block mt-4">
          <div
            className="cf-turnstile g-recaptcha"
            data-sitekey="0x4AAAAAAB1I70UrXqf5uM21"
            id="sib-captcha"
            data-callback="handleCaptchaResponse"
            data-language="en"
          ></div>
          <label className="entry__specification text-sm">
            Form secured by Cloudflare Turnstile
          </label>
        </div>

        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          async
          defer
        />

        {status && (
          <p className={`mt-1 ${isSuccess ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
            {status}
          </p>
        )}

        <input type="hidden" name="locale" value="en" />
        <input type="hidden" name="email_address_check" value="" />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-6 w-full py-3 px-6 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
