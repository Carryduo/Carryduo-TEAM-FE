import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Carryduo" />
          <meta property="og:title" content="Carryduo" />
          <meta property="og:description" content="롤 듀오 서칭 플랫폼" />
          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/79081800?v=4"
          />
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
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
