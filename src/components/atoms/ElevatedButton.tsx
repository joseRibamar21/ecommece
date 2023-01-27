import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ElevatedButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: React.ReactNode
}

export default function ElevatedButton(props: ElevatedButtonProps){
  return <button 
  className={`flex px-4 py-2 w-[100%] bg-primary rounded-2xl justify-center items-center shadow-lg text-white font-semibold
    hover:brightness-95
    active:brightness-90
    active:shadow-none
  `}
  {...props}
  >
    {props.children}
  </button>
}
