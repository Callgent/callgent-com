'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Inter } from 'next/font/google';
import 'node_modules/react-modal-video/css/modal-video.css';
import { dir } from 'i18next';
import { usePathname, useRouter } from 'next/navigation';
import { Providers } from './providers';
import { useEffect } from 'react';
import '../../styles/index.css';
import { getCookie, setCookie } from '@/util/cookie';
const inter = Inter({ subsets: ['latin'] });
import { fallbackLng } from '@/app/lib/i18n/settings';
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

export default function RootLayout({ children, params: { lng } }: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string
  }
}>) {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const findLanguageByLng = (targetLng: string) => {
      const lang = getCookie('lang');
      const pathName = pathname?.split(targetLng)[1];
      if (lang !== targetLng) {
        router.push('/' + lang + pathName);
      }
      return lang || null;
    };
    findLanguageByLng(lng);
  }, [lng, pathname, router]);
  return (
    <html suppressHydrationWarning lang={lng} dir={dir(lng)}>
      <Head>
        <title>Botlet.IO Home</title>
        <meta name="description" content="This is Botlet.IO Home Page for Botlet.IO" />
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
