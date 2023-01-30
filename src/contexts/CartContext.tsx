import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, destroyCookie, parseCookies } from "nookies"
import Router from 'next/router'
import { Product } from "../@types/Product";
import { Card } from "../@types/Card";

export interface CardContextDataProps {
  card: Card[] | null;
  addCard(product:Product): void;
  removeCard(product:Product): void;
  clearCard():void;
}

interface CardProviderProps {
  children: ReactNode;
}

export const CardContext = createContext({} as CardContextDataProps);

export function CardContextProvider({ children }: CardProviderProps) {
  const [card, setCard] = useState<Card[]>([]);

  async function addCard(product:Product ) {
    try {
      const index = card.findIndex(e=> e.product.id == product.id);
      if(index > 0){
        let updateProduct = {
          quant: card[index].quant++,
          product
        }
        card[index] = updateProduct
        setCard([...card]);
      }else{
        setCard([...card,{quant:1,product}])
      }
     
      setCookie(undefined, 'ecommerce.card', JSON.stringify(
        card
      ), { maxAge: 24 * 60 * 60 * 5 })
    } catch (error) {
      console.log(error)
      throw error;
    } 
  }

  function removeCard(product:Product) {
    try {
      const index = card.findIndex(e=> e.product.id == product.id);
      if(index > 0){
        if(card[index].quant>1){
          let updateProduct = {
            quant: card[index].quant--,
            product
          }
          card[index] = updateProduct
          setCard([...card]);
        }else{
          card.splice(index)
          setCard([...card])
        }
      }
     
      setCookie(undefined, 'ecommerce.card', JSON.stringify(
        card
      ), { maxAge: 24 * 60 * 60 * 5 })
    } catch (error) {
      console.log(error)
      throw error;
    } 
  }

  function clearCard(){
    setCookie(undefined, 'ecommerce.card', JSON.stringify(
      []
    ), { maxAge: 24 * 60 * 60 * 5 })
  }

  useEffect(()=>{
    const { "ecommerce.card": card } = parseCookies()
    if(card){
      const data = JSON.parse(card)
      setCard(data)
    }else{
      setCard([])
    }
  },[])

  return (
    <CardContext.Provider value={{
      card,
      addCard,
      removeCard,
      clearCard
    }}>
      {children}
    </CardContext.Provider>
  )
}
