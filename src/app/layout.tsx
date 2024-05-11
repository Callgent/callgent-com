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
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTMID} />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Setting>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Setting>
        </Providers>
      </body>
    </html>
  );
}
