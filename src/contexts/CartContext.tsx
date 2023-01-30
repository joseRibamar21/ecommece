import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, destroyCookie, parseCookies } from "nookies"
import Router from 'next/router'
import { Product } from "../@types/Product";
import { Cart } from "../@types/Cart";

export interface CartContextDataProps {
  cart: Cart[] | null;
  addCart(product:Product): void;
  removeCart(product:Product): void;
  clearCart():void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextDataProps);

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart[]>([]);

  async function addCart(product:Product ) {
    try {
      const index = cart.findIndex(e=> e.product.id == product.id);
      let cart2 = cart
      if(index > -1){
        let updateProduct = {
          quant: cart[index].quant++,
          product
        }
        cart[index] = updateProduct
        setCart([...cart]);
      }else{
        cart2 = [...cart,{quant:1,product}]
        setCart(cart2)
        
      }
    } catch (error) {
      throw error;
    } 
  }

  function removeCart(product:Product) {
    try {
      const index = cart.findIndex(e=> e.product.id == product.id);
      let cart2 = cart
      if(index > -1){
        if(cart[index].quant>0){
          let updateProduct = {
            quant: cart[index].quant--,
            product
          }
          cart[index] = updateProduct
          cart2 = [...cart]
          setCart(cart2);
        }else{
          cart2 = cart
          cart.splice(index)
          setCart([...cart])
        }
      }
    } catch (error) {
      throw error;
    } 
  }

  function clearCart(){
    setCart([])
  }


  return (
    <CartContext.Provider value={{
      cart,
      addCart,
      removeCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
