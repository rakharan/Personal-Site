import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
const myFont = localFont({ src: './pala.ttf' })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>

      <Component {...pageProps} />
    </main >
  )
}
