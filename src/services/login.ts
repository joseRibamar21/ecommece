import { users_mock } from "../mock/users_mock"

interface loginServiceProps{
  email: string
  password: string
} 

export async function loginService({email, password}: loginServiceProps){
  const findUser = users_mock.filter(e=> e.email === email && e.password=== password)
  await new Promise(function(resolve, reject) { 
    setTimeout(function() { resolve(10); }, 500);
  }).then()

  if(!findUser){
    throw new Error('Usário não encontrado!')
  }

  return findUser[0]
}
