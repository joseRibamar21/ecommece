import Link from "next/link";
import { User, ShoppingCartSimple } from "phosphor-react"
import LinkNav from "../atoms/LinkNav";
import Router from "next/router";
import { useAuth } from "../../hooks/useAuth";

export default function NavBar() {
  const { user } = useAuth()

  return <div className="flex flex-row justify-between h-16 bg-primary items-center px-8">
    <h1 className="text-white cursor-pointer" onClick={()=>Router.push("/")} >E-commerce</h1>
    <div className="flex gap-4">
     {/*  <LinkNav href="">
        M. Didáticos
      </LinkNav>
      <LinkNav href="">
        Cursos
      </LinkNav> */}
    </div>
    <div className="flex flex-row gap-10 items-center">
      {user?.id? <span className="text-white">{user.name}</span> :  <Link href='/singin' className="flex flex-row items-center cursor-pointer">
        <User size={35} color="white"/>
        <span className="text-white">Entrar</span>
      </Link>}
      
      <ShoppingCartSimple size={35} color="white" onClick={()=> Router.push("/cart")} className="cursor-pointer"/>
    </div>
  </div>
}
