import { Html, Head, Main, NextScript } from 'next/document'

const gridStyle = {
  backgroundColor: '#f2f2f2',
  backgroundImage: [
    'linear-gradient(-90deg, rgba(0,0,0,.05) 1px, transparent 1px)',
    'linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px)',
    'linear-gradient(-90deg, rgba(0,0,0,.04) 1px, transparent 1px)',
    'linear-gradient(rgba(0,0,0,.04) 1px, transparent 1px)',
    'linear-gradient(transparent 3px, #f2f2f2 3px, #f2f2f2 78px, transparent 78px)',
    'linear-gradient(-90deg, #aaa 1px, transparent 1px)',
    'linear-gradient(-90deg, transparent 3px, #f2f2f2 3px, #f2f2f2 78px, transparent 78px)',
    'linear-gradient(#aaa 1px, transparent 1px)',
  ].join(', '),
  backgroundSize: '4px 4px, 4px 4px, 80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px, 80px 80px',
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icons/favicon-32x32.png" type="image/png" />
      </Head>
      <body className='antialiased' style={gridStyle}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
