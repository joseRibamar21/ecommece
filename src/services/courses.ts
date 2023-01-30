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

