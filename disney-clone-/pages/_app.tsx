import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Header from '../components/Header'
import GlobalStyle from '../globalstyles'
import { SessionProvider } from 'next-auth/react'

const theme: DefaultTheme = {
    primary: '#111',
    secondary: '#0070f3',
    white: '#fff',
    brightBlue: '#3E64E5',
    silver: 'silver',
    darkGrey: '#0070f3',
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}
