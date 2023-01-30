import { users_mock } from "../mock/users_mock"
import ShortUniqueId from "short-unique-id"

interface newUserServiceProps{
  name: string
  email: string
  password: string
} 

export async function newUserService({name, email, password}: newUserServiceProps){
  if(users_mock.find(e=> e.email == email)){
    console.log("AKIII")
    throw Error("Usuário já cadastrado")
  }

  const generateCode = new ShortUniqueId({ length: 10 })
  const code = String(generateCode())
  await new Promise(function(resolve, reject) { 
    setTimeout(function() { resolve(10); }, 500);
  }).then()
  const newUser = {
    id: code,
    name,
    email,
    password
  }
  users_mock.push(newUser)
  return newUser
}
