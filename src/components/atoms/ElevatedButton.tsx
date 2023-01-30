import { type } from "os"
import { Circle } from "phosphor-react"

interface ElevatedButtonProps{
  onClick: Function
  children: React.ReactNode
  loading?: boolean
  type?: "BLUE" | "RED"
}

export default function ElevatedButton(props: ElevatedButtonProps){
  const style = ` flex px-4 py-2 w-[100%] 
  ${props.type == "RED" ?"bg-red-600" :"bg-primary"}
   rounded-2xl justify-center items-center shadow-lg text-white font-semibold
  hover:brightness-95
  active:brightness-90
  active:shadow-none
`

  return <button 
  onClick={()=>props.onClick()}
  className={style}
  >
    {props.loading? <Circle size={25} className="animate-spin"/> :props.children}
  </button>
}
