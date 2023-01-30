import { Cart } from "../@types/Cart";

export function pricewhithdescont(price: number, descont:number){
  return price - (price * (descont/100))
}


export function calculeProducts(products:Cart[],parcelas:number){
  let valor = 0;
  products.map(e=> {
    valor += e.quant*(pricewhithdescont(e.product.price,e.product.descont))
  })
  console.log(valor)
  let valorTotal = valor
  let valorParcelado = Math.ceil(valor/parcelas)

  return {valorTotal, valorParcelado}
}
