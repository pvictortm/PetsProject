import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import tema from '../ui/themes/tema';
import Header from '../ui/components/Cabecalho/header';


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={tema}>
    <Header></Header>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}


export default MyApp
