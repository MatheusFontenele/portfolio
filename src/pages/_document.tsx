import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Matheus's website" />
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <body className="bg-[#fffffe]">
          {/* 👇 Here's the script */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
