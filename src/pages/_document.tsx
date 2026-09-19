import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/favicon-32x32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <meta name="theme-color" content="#f8f8f8" />
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />

      </body>
    </Html>
  )
}
