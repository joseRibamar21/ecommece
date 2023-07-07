/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import NavBar from "../components/molecules/NavBar";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import { newsCourses } from "../services/courses";
import { Product } from "../@types/Product";
import ListRowProducts from "../components/molecules/ListRowProducts";
import { newsmaterials } from "../services/materials";

export default function Home() {
  const [newCourses, setNewCourses] = useState<Product[] | null>()
  const [newMaterials, setNewMaterials] = useState<Product[] | null>()

  const data = [
    "https://img.freepik.com/psd-gratuitas/modelo-de-banner-de-cursos-online_23-2148636281.jpg?w=2000",
    "https://img.freepik.com/vetores-gratis/mao-desenhada-de-volta-ao-fundo-da-escola_23-2149056178.jpg?size=626&ext=jpg&uid=R91166541&ga=GA1.2.1094550629.1674005860&semt=sph"
  ]

  async function loadPage() {
    setNewCourses(await newsCourses())
    setNewMaterials(await newsmaterials())
  }

  useEffect(() => {
    loadPage()
  }, [])

  return (
    <>
      <Head>
        <title>e-commerce</title>
        <meta name='home' content='Bem vindo ao Ecommerce' />
      </Head>

      <main>
        <NavBar />
        <Carousel interval={3000}>
          {data.map((e, i) => {
            return <Carousel.Item key={i}>
              <img src={e} alt={e} className="w-[100%] max-h-[500px] object-cover" />
            </Carousel.Item>
          })}
        </Carousel>
        <div className=" flex flex-col p-3 gap-4">
          <ListRowProducts title="Novos Cursos" products={newCourses} />
          <ListRowProducts title="Essenciais para volta as aulas" products={newMaterials} />
        </div>

      </main>
    </>
  )
}
