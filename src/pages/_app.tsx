import { createGlobalStyle } from 'styled-components'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default App
