/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import NavBar from "../components/molecules/NavBar"
import { useCart } from "../hooks/cartAuth"
import { calculeProducts, pricewhithdescont } from "../utils/functionMoney"
import { priceFormater } from "../utils/priceFormater"
import { useEffect, useState } from "react"
import RadioGroup from "../components/atoms/RadioGroup"
import ElevatedButton from "../components/atoms/ElevatedButton"
import Router from "next/router"
import { useAuth } from "../hooks/useAuth"

export default function CartPage() {
  const { cart, clearCart } = useCart()
  const [priceP, setpriceP] = useState<number>(0)
  const [priceT, setpriceT] = useState<number>(0)
  const [selectedOption, setSelectedOption] = useState("");
  const { user } = useAuth()

  const parcelas = [1,2,3,4,5,6]

  useEffect(()=>{
    const { valorTotal , valorParcelado } = calculeProducts(cart??[],parseInt(selectedOption));
    setpriceP(valorParcelado);
    setpriceT(valorTotal);
  },[cart, selectedOption])

  return (
    <>
      <Head>
        <title>e-commerce</title>
      </Head>

      <main>
        <NavBar />

        <div className="flex flex-col m-6 bg-slate-200 border-[2px] border-gray-300 rounded-lg shadow-xl">
          <div className=" bg-primary rounded-t-lg p-2" >
            <h2 className="text-white">
              Carrinho
            </h2>
          </div>
          <div className="flex flex-col gap-2 p-2">
            {cart?.map(e => {
              return <div key={e.product.id} className="flex justify-between items-center">
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <img src={e.product.banner} alt={e.product.name} className="max-w-[100px] rounded" />
                  <h6>{e.quant} x {e.product.name}</h6>
                </div>
                <span>{priceFormater(e.quant * pricewhithdescont(e.product.price, e.product.descont))}</span>
              </div>
            })}
          </div>
            <div className="flex justify-end bg-primary rounded-b-lg py-2 px-4 text-white text-lg" >
              {priceFormater(priceT)}
            </div>
        </div>
        
        <div className="flex flex-col p-4 gap-4">
        <RadioGroup parcelas={parcelas} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        
        <span>{selectedOption.replace("-"," ")} de {priceFormater(priceP)}</span>
        
        </div>
        <div className="p-3">
          <ElevatedButton onClick={()=>{
            user?.id? Router.push('/gratters') :Router.push('/singin')
              clearCart()
            }}>
            Finalizar Compra
          </ElevatedButton>
        </div>
      </main>
    </>
  )
}
