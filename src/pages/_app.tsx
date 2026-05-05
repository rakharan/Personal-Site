import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { Analytics } from '@vercel/analytics/react';

const myFont = localFont({ src: './pala.ttf' })
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
      <Analytics />
    </main >
  )
}
