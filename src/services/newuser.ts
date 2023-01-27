import { users_mock } from "../mock/users_mock"
import ShortUniqueId from "short-unique-id"

interface newUserServiceProps{
  name: string
  email: string
  password: string
} 

export function newUserService({name, email, password}: newUserServiceProps){
  const generateCode = new ShortUniqueId({ length: 10 })
  const code = String(generateCode())
  users_mock.push({
    id: code,
    name,
    email,
    password
  })
}
