'use client';

import Image from 'next/image';

const OAuthButton = ({ provider }: { provider: string }) => {
  const handleOauthLogin = async () => {
    const from =
      new URLSearchParams(window.location.search).get('from') ||
      process.env.NEXT_PUBLIC_SITE_ROOT;
    window.location.href = `${process.env.NEXT_PUBLIC_API_LOGIN_PRE}/${provider}?successUri=${encodeURIComponent(from)}`;
  };

  return (
    <button
      onClick={handleOauthLogin}
      className="border-stroke mb-6 h-10 flex w-1/2 items-center justify-center rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
    >
      <span className="mr-3">
        <Image
          src={`/images/signin/${provider}.svg`}
          width="22"
          height="22"
          alt={provider}
        />
      </span>
      {`${provider.charAt(0).toUpperCase()}${provider.slice(1)}`}
    </button>
  );
};

export default OAuthButton;
