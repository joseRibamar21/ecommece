/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import NavBar from "../../components/molecules/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import { Product } from "../../@types/Product";

import { GetServerSideProps } from "next";
import { hipematerials } from "../../services/materials";
import RatingStars from "../../components/atoms/RatingStars";
import { priceFormater } from "../../utils/priceFormater";
import { pricewhithdescont } from "../../utils/functionMoney";
import ElevatedButton from "../../components/atoms/ElevatedButton";
import { useEffect, useState } from "react";
import ListRowProducts from "../../components/molecules/ListRowProducts";
import { findOneProduct } from "../../services/allproducts";
import { hipeCursos } from "../../services/courses";
import { useCart } from "../../hooks/cartAuth";

interface OneMaterialProps {
  product: Product,
  category: string
}

export default function OneMaterial({ product, category }: OneMaterialProps) {
  const [materials, setMaterials] = useState<Product[] | null>()
  const { cart, addCart, removeCart } = useCart()
  var isContainInCart = cart?.find(e => e.product.id == product.id)

  async function loadPage() {
    if (category == 'courses') {
      setMaterials(await hipeCursos())
    } else {
      setMaterials(await hipematerials())
    }
  }

  function handleClick() {
    console.log(cart)
    if(isContainInCart){
      removeCart(product)
    }else{
      addCart(product)
    }
  }

  useEffect(() => {
    loadPage()
  }, [])

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
              <RatingStars rating={product.reputation} />
            </div>
            {product.descont != 0 ? <span className="text-base font-semibold text-green-700">desconto de {product.descont}%</span> : <></>}
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
            <div className="flex justify-end pt-5 w-[100%] ">
              <div>
                <ElevatedButton type={isContainInCart ? "RED" : "BLUE"} onClick={handleClick}>
                  {!isContainInCart ? "Adicionar no Carrinho" : "Remover do Carrinho"}
                </ElevatedButton>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col m-7 p-3 border-gray-300 border-[1px] shadow-2xl rounded-xl">
          <h4>
            Descrição
          </h4>
          <p>{product.description}</p>
        </div>

        <div className=" flex flex-col p-3 gap-4">
          <ListRowProducts title="Mais vendidos" products={materials} />
        </div>
      </main>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id
  const category = ctx.params?.category

  const product = await findOneProduct(parseInt(id as string))

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product,
      category
    }
  }
}
