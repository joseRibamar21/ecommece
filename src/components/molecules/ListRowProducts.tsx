import { Product } from "../../@types/Product";
import CardProduct from "../atoms/CardProduct";

interface ListRowProductsProps {
  title: string
  products: Product[] | null | undefined
}


export default function ListRowProducts({ title, products }: ListRowProductsProps) {
  if (products) {
    return (
      <div className="flex flex-col w-[100%]">
        <h2>{title}</h2>
        <div className="flex flex-row w-[100%] gap-3 snap-x snap-proximity overflow-x-auto p-2">
          {products.map(e => {
            return <div key={e.id} className="snap-start">
              <CardProduct product={e} />
            </div>
          })}
        </div>

      </div>
    )
  } else {
    return <></>
  }
}
