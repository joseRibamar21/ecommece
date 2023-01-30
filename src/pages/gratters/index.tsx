import Head from "next/head";
import Image from "next/image";
import Input from "../../components/atoms/Input";
import ElevatedButton from "../../components/atoms/ElevatedButton";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import NavBar from "../../components/molecules/NavBar";


export default function Login() {

  return (
    <>
      <Head>
        <title>Parabens pela Compra</title>
      </Head>

      <main className="flex flex-col justify-center">
        <NavBar/>
        <h1>Parabens Pela Compra</h1>
      </main>
    </>
  )
}
