/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import NavBar from "../../components/molecules/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import { Product } from "../../@types/Product";

import { GetServerSideProps } from "next";
import { findOneMaterial } from "../../services/materials";
import RatingStars from "../../components/atoms/RatingStars";
import { priceFormater } from "../../utils/priceFormater";
import { pricewhithdescont } from "../../utils/functionMoney";
import ElevatedButton from "../../components/atoms/ElevatedButton";

interface OneMaterialProps {
  product: Product
}

export default function OneMaterial({ product }: OneMaterialProps) {


  return (
    <>
      <Head>
        <title>e-commerce</title>
      </Head>

      <main>
        <NavBar />
        <div className="flex flex-row flex-wrap gap-3 p-7 justify-center">
          <div className="flex flex-1 justify-center min-w-[400px] " >
            <img src={product.banner} alt={product.name} className="w-[100%] max-w-md" />
          </div>
          <div className="flex flex-col flex-1 min-w-[300px] ">
            <h1>
              {product.name}
            </h1>
            <h3 className="text-base">
              {product.subtitle}
            </h3>
            <div className="flex flex-row justify-end" >
              <RatingStars rating={product.reputation}/>
            </div>
            {product.descont != 0? <span className="text-base font-semibold text-green-700">desconto de {product.descont}%</span>:<></>}
            {product.descont != 0 ?
          <div className="flex flex-row gap-1">
            <span className="font-bold text-xl">
              {priceFormater(pricewhithdescont(product.price, product.descont))}
            </span>
            <span className="line-through">
              {priceFormater(product.price)}
            </span>
          </div>
          :
          <span className="font-bold text-xl">
            {priceFormater(product.price)}
          </span>
        }
          <ElevatedButton>
          Adicionar no Carrinho
          </ElevatedButton>
          </div>

        </div>
        
      </main>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id

  const product = await findOneMaterial(parseInt(id as string))

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product
    }
  }
}
