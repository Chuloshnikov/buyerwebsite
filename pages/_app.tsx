import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/globals.css';

import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {

  
  return (
    <Provider store={store}>
        <SessionProvider session={session}>
          <PersistGate loading={"loading"} persistor={persistor}>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </PersistGate>
        </SessionProvider>
    </Provider>
  ) 
}
