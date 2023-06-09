import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="shortcut icon" href="/icons/favicon-32x32.png" type="image/x-icon" />
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />

      </body>
    </Html>
  )
}
