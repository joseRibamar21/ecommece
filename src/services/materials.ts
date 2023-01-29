import { products_mock } from "../mock/products";

export async function newsmaterials(){
  const materials = products_mock.filter(e=> e.category==="Materiais").sort((a,b)=> a.id > b.id ? -1 : 1)
  await new Promise(function(resolve, reject) { 
    setTimeout(function() { resolve(10); }, 500);
  }).then()

  if(!materials){
    throw new Error('Erro ao buscar cursos')
  }

  return materials
}

