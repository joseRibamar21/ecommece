import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import Router from "next/router";
import Input from "../components/atoms/Input";
import ElevatedButton from "../components/atoms/ElevatedButton";
import { useAuth } from "../hooks/useAuth";

export default function SingUp() {

  const { singUp, isUserLoading } = useAuth()
  const [dataForm, setDataForm] = useState({
    name:"",
    email: "",
    password: ""
  })

  const onChangeInput = (e: { target: { name: string; value: string; }; }) => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  async function handleClickLogin(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    try {
      await singUp(dataForm.name, dataForm.email, dataForm.password)
      Router.back()
      
    } catch (e) {
      console.log(e)
      toast("Usuário já cadastrado!", { type: "error" })
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <main className="flex flex-row justify-center items-center">
      <div className="hidden md:visible md:flex flex-1">
          <Image src="/singupBanner.jpg" alt="beautiful" width={800} height={600} className="w-[100%]" />
        </div>
        <div className="flex flex-1 w-[100%] flex-col p-8 gap-12 justify-center items-center md:items-start">
          
          <div className="flex flex-col items-center md:items-start ">
            <h1>ECommerce</h1>
            <h3>Nova Conta</h3>
            <p>Aproveite as ofertas na E-commerce e desfrute de promoções e produtos de qualidade!</p>
          </div>
          <form action="" onSubmit={handleClickLogin} className="flex flex-col gap-4 w-[100%] max-w-sm">
          <div className="flex flex-col gap-2">
              <label htmlFor="name">Nome</label>
              <Input type="text"
                name="name"
                id="name"
                disabled={isUserLoading}
                placeholder="exemplo@exemplo.com"
                onChange={onChangeInput}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <Input type="email"
                name="email"
                id="email"
                disabled={isUserLoading}
                placeholder="Carlos Andre Macedo"
                onChange={onChangeInput}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Senha</label>
              <Input
                type="password"
                name="password"
                id="password"
                disabled={isUserLoading}
                onChange={onChangeInput}
                required />
            </div>
            <div className="pt-10">
              <ElevatedButton onClick={()=>{}} loading={isUserLoading}>
                Entrar
              </ElevatedButton>
            </div>
          </form>
          <div>
            <span>Já possui conta?</span>
            <span className="font-semibold text-tertiary cursor-pointer" onClick={()=>{Router.replace('/singin')}}>cadastre aqui</span>
          </div>
        </div>
        

      </main>
    </>
  )
}
