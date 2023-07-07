import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, destroyCookie, parseCookies } from "nookies"
import Router from 'next/router'
import { User } from "../@types/User";
import { loginService } from "../services/login";
import { newUserService } from "../services/newuser";
import ReactGA from "react-ga4";

export interface AuthContextDataProps {
  user: User | null;
  isUserLoading: boolean;
  singIn: (email: string, password: string) => Promise<void>;
  singUp: (name: string, email: string, password: string) => Promise<void>;
  singOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isUserLoading, setIsUserLoading] = useState(false)

  async function singIn(email: string, password: string) {
    try {
      setIsUserLoading(true)
      ReactGA.ga('create', 'G-59D5CKV0JH', {
        'cookieName': 'Joseee',
      });
      
      const user = {
        id: "123",
        name: "JOSEEEE",
      }/* await loginService({email,password})  */
      console.log(user)
      setCookie(undefined, 'nextauth.user', JSON.stringify(
        user
      ), { maxAge: 24 * 60 * 60 * 5 })

      setCookie(undefined,'_ga','Joseeeee')
      
      setUser(user)
    } catch (error) {
      console.log(error)
      throw error;
    } finally {
      setIsUserLoading(false);
    }
  }

  async function singUp(name: string, email: string, password: string) {
    try {
      setIsUserLoading(true)
      const user = await newUserService({name, email, password})
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
    /* const { "nextauth.user": user } = parseCookies()
    if(user){
      const objectUser = JSON.parse(user??"") 
      setUser(objectUser)
    } */
  },[])

  return (
    <AuthContext.Provider value={{
      singIn,
      singUp,
      singOut,
      isUserLoading,
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}
