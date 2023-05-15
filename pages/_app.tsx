import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/globals.css';

import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
         <PersistGate loading={"loading"} persistor={persistor}>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
         </PersistGate>
    </Provider>
  ) 
}
