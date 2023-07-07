/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import NavBar from "../components/molecules/NavBar";
import ElevatedButton from "../components/atoms/ElevatedButton";
import Router from "next/router";


export default function Gratters() {

  return (
    <>
      <Head>
        <title>Parabens pela Compra</title>
        <meta name='gratters' content='Parabens por finalizar a compra' />
      </Head>

      <main className="flex flex-col">
        <NavBar />
        <div className="flex flex-row flex-wrap justify-evenly items-center p-7">
          <div className="flex flex-1 p-4">
            <img src="/finish.jpg" alt="finish" className=" p-7 max-w-[600px] w-[100%]" />
          </div>
          <div className="flex flex-col flex-1 items-center min-w-[300px] gap-10">
            <h1>Compra Aprovada!</h1>
            <ElevatedButton onClick={() => { Router.push('/') }}>
              Continuar comprando
            </ElevatedButton>
          </div>
        </div>
      </main>
    </>
  )
}
