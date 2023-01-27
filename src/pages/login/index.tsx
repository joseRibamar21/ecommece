import Head from "next/head";
import Image from "next/image";
import Input from "../../components/atoms/Input";
import ElevatedButton from "../../components/atoms/ElevatedButton";
import Link from "next/link";

export default function Login() {

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <main className="flex flex-row justify-center">
        <div className="flex flex-1 w-[100%] flex-col p-8 gap-12 justify-center items-center md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <h3>Bem Vindo</h3>
            <h1>ECommerce</h1>
          </div>
          <form action="" className="flex flex-col gap-4 w-[100%] max-w-sm">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <Input type="email" name="email" id="email" placeholder="exemplo@exemplo.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Senha</label>
              <Input type="password" name="password" id="password" />
            </div>
            <div className="pt-10">
            <ElevatedButton type="submit">
              Entrar
            </ElevatedButton>
            </div>
          </form>
          <div>
            <span>Não possui conta?</span>
            <Link href='/newuser' className="font-semibold text-tertiary">cadastre aqui</Link>
          </div>
        </div>
        <div className="hidden md:visible md:flex flex-1">
          <Image src="/beautiful.png" alt="beautiful" width={600} height={800} className="w-[100%]" />
        </div>
        
      </main>
    </>
  )
}
