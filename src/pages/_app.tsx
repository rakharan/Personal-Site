import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'
import { useScrollAnimations } from '@/hooks/useScrollAnimations'

const myFont = localFont({ src: '../assets/fonts/pala.ttf' })
export default function App({ Component, pageProps }: AppProps) {
  useScrollAnimations()
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
      <Analytics />
    </main >
  )
}
