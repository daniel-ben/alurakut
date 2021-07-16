import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../components/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS (Necolas Reset CSS <3) */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: rgba(100, 100, 100, 0.9);
    background-image: url("https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/09/05155108/React-Hooks.png");
/*     background-image: url("../src/cateyes.svg") ; */
  }
  .background-box {
    width: 30vw;
    height: 30vh;
  }
  .background-box img {
    width: 100%;
    height:  100%;
  }
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}