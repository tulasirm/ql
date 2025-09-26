import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script src="/js/pace.min.js" strategy="beforeInteractive" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}