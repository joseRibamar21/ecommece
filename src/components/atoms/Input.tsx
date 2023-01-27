import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
}

export default function Input(props: InputProps){
  return <input className="px-4 py-2 bg-inputBackground rounded-xl border-none outline-0" {...props} />
}
