import { AppProps } from 'next/app';
import Head from 'next/head';
import CommonStyle from 'styles/CommonStyle';
import LoadingBar from 'components/common/LoadingBar/LoadingBar';
import Layout from 'components/common/Layout';
import useRouteChangeLoading from 'hooks/useRouteChangeLoading';
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { isLoading } = useRouteChangeLoading();

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <>
      <CommonStyle />
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          rel="preload"
          href="/fonts/NotoSansKR-Regular.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/NotoSansKR-Medium.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/NotoSansKR-Bold.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/NotoSansKR-Black.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
      </Head>
      <Layout>
        {isLoading && <LoadingBar />}
        <Component {...pageProps} />
      </Layout>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </>
  );
}

export default MyApp;
