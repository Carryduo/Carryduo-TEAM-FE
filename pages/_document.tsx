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
      <Html lang="ko">
        <Head>
          <meta name="description" content="Carryduo" />
          <meta property="og:title" content="Carryduo" />
          <meta property="og:description" content="롤 듀오 서칭 플랫폼" />
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7197791688601792"
            crossOrigin="anonymous"
          ></script>
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
