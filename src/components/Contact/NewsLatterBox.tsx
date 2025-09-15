"use client";

import { useEffect } from "react";

export default function SubscribeForm() {
  useEffect(() => {
    (window as any).REQUIRED_CODE_ERROR_MESSAGE = "Please choose a country code";
    (window as any).LOCALE = "en";
    (window as any).EMAIL_INVALID_MESSAGE =
      (window as any).SMS_INVALID_MESSAGE =
      "The information provided is invalid. Please review the field format and try again.";
    (window as any).REQUIRED_ERROR_MESSAGE =
      "This field cannot be left blank.";
    (window as any).GENERIC_INVALID_MESSAGE =
      "The information provided is invalid. Please review the field format and try again.";
    (window as any).translation = {
      common: {
        selectedList: "{quantity} list selected",
        selectedLists: "{quantity} lists selected",
        selectedOption: "{quantity} selected",
        selectedOptions: "{quantity} selected",
      },
    };
    (window as any).AUTOHIDE = Boolean(1);

    const brevoScript = document.createElement("script");
    brevoScript.src = "https://sibforms.com/forms/end-form/build/main.js";
    brevoScript.defer = true;
    document.body.appendChild(brevoScript);

    const captchaScript = document.createElement("script");
    captchaScript.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js";
    captchaScript.async = true;
    captchaScript.defer = true;
    document.body.appendChild(captchaScript);

    return () => {
      document.body.removeChild(brevoScript);
      document.body.removeChild(captchaScript);
    };
  }, []);

  return (
    <div className="relative rounded-sm bg-white px-8 py-8 shadow-lg dark:bg-gray-dark sm:p-12 lg:px-10 xl:p-12 lg:mb-5 mb-12
    lg:h-[35rem] ">
      <div id="sib-form-container" className="w-full h-full flex flex-col">
        <div
          id="error-message"
          className="sib-form-message-panel hidden"
          style={{
            fontSize: 16,
            textAlign: "left",
            fontFamily: "Helvetica, sans-serif",
            color: "#661d1d",
            backgroundColor: "#ffeded",
            borderRadius: 3,
            borderColor: "#ff4949",
          }}
        >
          Your subscription could not be saved. Please try again.
        </div>

        <div
          id="success-message"
          className="sib-form-message-panel hidden"
          style={{
            fontSize: 16,
            textAlign: "left",
            fontFamily: "Helvetica, sans-serif",
            color: "#085229",
            backgroundColor: "#e7faf0",
            borderRadius: 3,
            borderColor: "#13ce66",
          }}
        >
          Please check your email to confirm the subscription link.
        </div>

        <form
          id="sib-form"
          method="POST"
          action="https://722998d0.sibforms.com/serve/MUIFAAF1UXMEFyRTvdH6dUd7HUIOvarfa7QAGvPXu1eo_xascsxYicCsu_lHs937b-xWLmCiK6i3qcmfWCNwXPG6iwIorZjyzgBV5xgiIWiGuBkZO-EbUrNjpjoD-z4hFkp-SuSGPSvQ90leVgf5XzlsRSEL3kYLBYCFDKSsY1KgUszStZTFMXsO8RnuWVIkm0H0b8Q-hh6dt7DO"
          data-type="subscription"
          className="flex flex-col justify-between flex-1 text-left"
        >
          <div>
            <div>
              <h2 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl 2xl:mb-2">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-sm font-medium text-body-color 2xl:mb-4">
                Stay updated with our latest news and offers directly in your inbox.
              </p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="EMAIL"
                className="block font-semibold text-gray-800 dark:text-white mb-2"
              >
                Enter your email address to subscribe
              </label>
              <input
                type="text"
                id="EMAIL"
                name="EMAIL"
                placeholder="EMAIL"
                required
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
            </div>

            <div className="flex items-start space-x-3 mt-4">
              <input type="checkbox" id="OPT_IN" name="OPT_IN" required
                className="h-5 w-5 text-indigo-600 border-gray-300 dark:border-gray-600 rounded focus:ring-indigo-500"
              />
              <label className="block text-base font-medium text-gray-800 dark:text-gray-300">
                I agree to receive newsletters and accept the privacy policy.
              </label>
            </div>

            <div className="">
              <div
                className="cf-turnstile"
                data-sitekey="0x4AAAAAAB1I70UrXqf5uM21"
                id="sib-captcha"
                data-callback="handleCaptchaResponse"
                data-language="en"
              />
              <p className="text-xs text-gray-500 mt-1">
                Form secured by Cloudflare Turnstile
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              SUBSCRIBE
            </button>
            <input type="hidden" name="locale" value="en" />
          </div>
        </form>
      </div>
    </div>
  );
}
