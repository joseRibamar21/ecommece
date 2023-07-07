import Head from "next/head";
import Image from "next/image";
import Input from "../components/atoms/Input";
import ElevatedButton from "../components/atoms/ElevatedButton";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import Router from "next/router";

export default function Login() {

  const { singIn, isUserLoading } = useAuth()
  const [dataForm, setDataForm] = useState({
    email: "",
    password: ""
  })

  const onChangeInput = (e: { target: { name: string; value: string; }; }) => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  async function handleClickLogin(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    try {
      await singIn(dataForm.email, dataForm.password)
      Router.back()
      console.log("AKIII")
    } catch (e) {
      console.log(e)
      toast("Usuário não encontrado!", { type: "error" })
    }
  }

  return (
    <>
      <Head>
        <title>SingIn</title>
        <meta name='SingIn' content='Login' />
        <meta property='og:type' content='website' />
      </Head>

      <main className="flex flex-row justify-center">
        <div className="flex flex-1 w-[100%] flex-col p-8 gap-12 justify-center items-center md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <h3>Bem Vindo</h3>
            <h1>ECommerce</h1>
          </div>
          <form action="" onSubmit={handleClickLogin} className="flex flex-col gap-4 w-[100%] max-w-sm">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <Input type="email"
                name="email"
                id="email"
                disabled={isUserLoading}
                placeholder="exemplo@exemplo.com"
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
            <span>Não possui conta?</span>
            <span className="font-semibold text-tertiary" onClick={()=>{Router.replace('/singup')}}>cadastre aqui</span>
          </div>
        </div>
        <div className="hidden md:visible md:flex flex-1">
          <Image src="/beautiful.png" alt="beautiful" width={600} height={800} className="w-[100%]" />
        </div>

      </main>
    </>
  )
}
