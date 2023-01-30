import { products_mock } from "../mock/products";

export async function findOneProduct(id:number){
  const materials = products_mock.filter(e=> e.id == id)
  await new Promise(function(resolve, reject) { 
    setTimeout(function() { resolve(10); }, 500);
  }).then()

  if(!materials){
    throw new Error('Erro ao buscar cursos')
  }

  return materials[0]
}
