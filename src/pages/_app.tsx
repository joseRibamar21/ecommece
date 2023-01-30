import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { AuthContextProvider } from '../contexts/AuthContext'
import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import { CartContextProvider } from '../contexts/CartContext';

function MyApp({ Component, pageProps }: AppProps) {

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
