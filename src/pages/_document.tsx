import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="shortcut icon" href="/icons/favicon-32x32.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
        <Script src="https://unpkg.com/aos@next/dist/aos.js"></Script>
        <Script id="AOS-init" dangerouslySetInnerHTML={{ __html: "AOS.init();" }} />
      </body>
    </Html>
  )
}
