import Link from "next/link";
import { User, ShoppingCartSimple } from "phosphor-react"
import LinkNav from "../atoms/LinkNav";

export default function NavBar() {
  return <div className="flex flex-row justify-between h-16 bg-primary items-center px-8">
    <h1 className="text-white" >E-commerce</h1>
    <div className="flex gap-4">
      <LinkNav href="">
        M. Didáticos
      </LinkNav>
      <LinkNav href="">
        Cursos
      </LinkNav>
    </div>
    <div className="flex flex-row gap-10">
      <Link href='/login' className="flex flex-row items-center cursor-pointer">
        <User size={35} color="white"/>
        <span className="text-white">Entrar</span>
      </Link>
      <ShoppingCartSimple size={35} color="white" />
    </div>
  </div>
}
