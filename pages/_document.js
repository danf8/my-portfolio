import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth max-w-mobile md:max-w-none'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
