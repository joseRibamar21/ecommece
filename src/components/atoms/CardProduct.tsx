/* eslint-disable @next/next/no-img-element */
import { Product } from "../../@types/Product";
import { pricewhithdescont } from "../../utils/functionMoney";
import { priceFormater } from "../../utils/priceFormater";
import RatingStars from "./RatingStars";
import Link from "next/link";
import Router from "next/router"

interface CardProductProps {
  product: Product
}

export default function CardProduct({ product }: CardProductProps) {
  return (
    <div className="flex flex-col w-[242px] cursor-pointer rounded-lg shadow-lg shadow-black" onClick={()=> Router.push(`/${product.category}/${product.id}`)}>
      <div>
        <img src={product.banner} alt={product.name} className="max-w-[240px] max-h-[135px] rounded-t-lg" />
      </div>
      <div className="p-1 flex flex-col gap-2">
        <h5>
          {product.name.length < 43 ? product.name : product.name.substring(0, 40) + "..."}
        </h5>
        <span className="text-start">
          {product.subtitle.length < 60 ? product.subtitle : product.subtitle.substring(0, 57) + "..."}
        </span>
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
        <RatingStars rating={product.reputation} />
      </div>
    </div>
  )
}
