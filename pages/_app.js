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
  
  //react hook wallpaper
  //  background-image: url("https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/09/05155108/React-Hooks.png");
  //majora wallpaper
  //  background: url("https://wallpapercave.com/wp/wp9037152.jpg") no-repeat fixed center;
  //green hyrule emblem
    background: #6D8B67 url("https://i.pinimg.com/originals/78/01/a4/7801a48ff2567d6e3f4e287eaefc581e.jpg") no-repeat fixed center; 

    background-size: 90%;
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