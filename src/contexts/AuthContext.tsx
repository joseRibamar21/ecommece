import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, destroyCookie, parseCookies } from "nookies"
import Router from 'next/router'
import { User } from "../@types/User";
import { loginService } from "../services/login";

export interface AuthContextDataProps {
  user: User | null;
  isUserLoading: boolean;
  singIn: (email: string, password: string) => Promise<void>;
  singOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isUserLoading, setIsUserLoading] = useState(false)
  const router = useRouter()

  async function singIn(email: string, password: string) {
    try {
      setIsUserLoading(true)
      const user = await loginService({email,password}) 
      console.log(user)
      setCookie(undefined, 'nextauth.user', JSON.stringify(
        user
      ), { maxAge: 24 * 60 * 60 * 5 })
      setUser(user)
    } catch (error) {
      console.log(error)
      throw error;
    } finally {
      setIsUserLoading(false);
    }
  }

  function singOut() {
    try {
      destroyCookie(undefined, 'nextauth.user')
      Router.replace('/singOut')
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  useEffect(()=>{
    const { "nextauth.user": user } = parseCookies()
    if(user){
      const objectUser = JSON.parse(user)
      setUser(objectUser)
    }
  },[])

  return (
    <AuthContext.Provider value={{
      singIn,
      singOut,
      isUserLoading,
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}
