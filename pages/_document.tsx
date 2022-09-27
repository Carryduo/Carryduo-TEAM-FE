import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="kr">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Carryduo" />
          <meta property="og:title" content="Carryduo" />
          <meta property="og:description" content="롤 듀오 서칭 플랫폼" />
          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/79081800?v=4"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
