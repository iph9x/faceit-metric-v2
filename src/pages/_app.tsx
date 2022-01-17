import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import store from 'src/store/rootReducer';
import { Preloader } from 'src/components';
import { MainLayout } from 'src/layouts';

import '../../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <Provider store={store}>
      <MainLayout>
        {isLoading ? (
          <Preloader />
        ) : (
          <Component {...pageProps} />
        )}
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
