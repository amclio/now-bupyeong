import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssString } from '../lib/stitches'

const mapKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY

const APP_NAME = 'Now, Bupyeong'
const APP_DESCRIPTION = 'Test Description'

class NextDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${mapKey}&libraries=drawing`}
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextDocument
