import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="kr">
          <meta property="og:title" content="Carryduo" />
          <meta property="og:description" content="롤 듀오 서칭 플랫폼" />
          <meta
            property="og:image"
            content="https://cdn.discordapp.com/attachments/969400866668937217/980686401953734656/1.png"
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
