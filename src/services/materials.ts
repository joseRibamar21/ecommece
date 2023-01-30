import { products_mock } from "../mock/products";

export async function newsmaterials(){
  const materials = products_mock.filter(e=> e.category==="materials").sort((a,b)=> a.id > b.id ? -1 : 1)
  await new Promise(function(resolve, reject) { 
    setTimeout(function() { resolve(10); }, 500);
  }).then()

  if(!materials){
    throw new Error('Erro ao buscar cursos')
  }

  return materials
}

export async function findOneMaterial(id:number){
  const materials = products_mock.filter(e=> e.category==="materials" && e.id == id)
  await new Promise(function(resolve, reject) { 
    setTimeout(function() { resolve(10); }, 500);
  }).then()

  if(!materials){
    throw new Error('Erro ao buscar cursos')
  }

  return materials[0]
}

export async function hipematerials(){
  const materials = products_mock.filter(e=> e.category==="materials").sort((a,b)=> a.id > b.id ? -1 : 1)
  await new Promise(function(resolve, reject) { 
    setTimeout(function() { resolve(10); }, 500);
  }).then()

  if(!materials){
    throw new Error('Erro ao buscar cursos')
  }

  return materials
}
