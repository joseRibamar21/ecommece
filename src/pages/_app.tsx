import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { AuthContextProvider } from '../contexts/AuthContext'
import React, { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { CartContextProvider } from '../contexts/CartContext';
import { createBrowserHistory } from "history";
import ReactGA from "react-ga4";

import TagManager from 'react-gtm-module'

ReactGA.initialize('G-59D5CKV0JH');

const tagManagerArgs = {
  gtmId: 'G-59D5CKV0JH'
}




function MyApp({ Component, pageProps }: AppProps) {
  /* ReactGA.send({}) */
  useEffect(() => {
    if (typeof window !== "undefined") {
      const history = createBrowserHistory();
      history.listen(location => {
        ReactGA.set({ page: location.location.pathname });
        ReactGA.send(location.location.pathname);
      });
    }

  }
    /*  ReactGA.send({ hitType: "pageview", page: window.location.pathname }) */

    , [])


  return <>
    <AuthContextProvider>
      <CartContextProvider>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
        />
      </CartContextProvider>
    </AuthContextProvider>
  </>
}

export default MyApp
