export function pricewhithdescont(price: number, descont:number){
  return price - (price * (descont/100))
}
