import { products_mock } from "../mock/products";

export async function newsCourses(){
  const courses = products_mock.filter(e=> e.category==="courses")
  await new Promise(function(resolve, reject) { 
    setTimeout(function() { resolve(10); }, 500);
  }).then()

  if(!courses){
    throw new Error('Erro ao buscar cursos')
  }

  return courses
}

export async function findOneCourse(id:number){
  const materials = products_mock.filter(e=> e.category==="courses" && e.id == id)
  await new Promise(function(resolve, reject) { 
    setTimeout(function() { resolve(10); }, 500);
  }).then()

  if(!materials){
    throw new Error('Erro ao buscar cursos')
  }

  return materials[0]
}


export async function hipeCursos(){
  const cursos = products_mock.filter(e=> e.category==="courses").sort((a,b)=> a.id > b.id ? -1 : 1)
  await new Promise(function(resolve, reject) { 
    setTimeout(function() { resolve(10); }, 500);
  }).then()

  if(!cursos){
    throw new Error('Erro ao buscar cursos')
  }

  return cursos
}
