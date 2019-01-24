import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon.png"></link>
          <link rel='stylesheet' type='text/css' href='/static/style/nprogress.css' />
          <link rel='stylesheet' type='text/css' href='/static/style/common/common.css' />
        </Head>
        <body className="custom_class">
        
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}