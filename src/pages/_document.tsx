import { Html, Main, Head, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='pt-BR'>
      <Head>
        <title>RealTech</title>
        <meta name="description" content="RealTech, portfolio" />
        <meta name="author" content="RealTech" />
        <meta name="keywords" content="RealTech" />
        <link rel="icon" href="/assets/images/foto-perfil.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
