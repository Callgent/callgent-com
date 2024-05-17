'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Inter } from 'next/font/google';
import 'node_modules/react-modal-video/css/modal-video.css';
import { dir } from 'i18next';
import { Providers } from './providers';
import { useEffect, useState } from 'react';
import '@/styles/index.css';
import { getCookie, setCookie } from '@/util/cookie';
const inter = Inter({ subsets: ['latin'] });
import { fallbackLng } from '@/util/i18n/settings';
import Head from 'next/head';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
const Setting = ({ children }) => {
  useEffect(() => {
    const lang = getCookie('lang');
    !lang && setCookie('lang', fallbackLng);
  }, []);

  return (
    <>
      {children}
      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const [lang, setLang] = useState(fallbackLng);
  useEffect(() => {
    const lng = getCookie('lang');
    if (!lng) {
      setCookie('lang', fallbackLng);
    } else {
      setLang(lng);
    }
  }, []);

  return (
    <html suppressHydrationWarning lang={lang} dir={dir(lang)}>
      <Head>
        <title>Callgent Home</title>
        <meta name="description" content="This is Callgent Home Page for Callgent" />
      </Head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTMID} />
        <Providers>
          <Setting>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Setting>
        </Providers>
      <Script
        id='tawk'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/6641de0a9a809f19fb303daa/1htokmmh3';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();`,
        }}
      />
      </body>
    </html>
  );
}
