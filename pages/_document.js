import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <script
            dangerouslySetInnerHTML={{
              __html:
                "try{if(sessionStorage.getItem('ta-loader-seen')==='1'){document.documentElement.classList.add('ta-loader-seen')}}catch(e){}"
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
