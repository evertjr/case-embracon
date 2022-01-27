import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Teste Embracon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
