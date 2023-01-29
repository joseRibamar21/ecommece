import { Star } from "phosphor-react"

interface RatingStars {
  rating: number
}

export default function RatingStars({rating}: RatingStars){
  var cont = 0
  const listStars = []

  if(rating> 20){
    cont++
  }
  if(rating> 40){
    cont++
  }
  if(rating> 60){
    cont++
  }
  if(rating> 80){
    cont++
  }

  for (let index = 0; index < cont; index++) {
    listStars.push( index)
    
  }

  return (
    <div className="flex flex-row gap-1">
      {listStars.map(e => {
        return <Star key={e} color="#1E0FFE" weight="fill" size={20}/>
      })}
    </div>
  )
}
