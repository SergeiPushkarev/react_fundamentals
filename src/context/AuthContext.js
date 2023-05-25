import { createContext, useState, useEffect } from "react";
import Loader from "../components/UI/loader/Loader";

export const AuthContext = createContext(null)

export const AuthProvider = ({children})=>{
    const [isAuth, setIsAuth] = useState(false)

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      if (localStorage.getItem("auth")) {
        setIsAuth(true)
      }
      setIsLoading(false)
    }, [])

    if (isLoading) {
        return <Loader/>
    }

    const logIn = async (cb)=>{
        localStorage.setItem("auth", "true")
        await setIsAuth(true)
        cb()
        }

    const logOut = ()=> {
        localStorage.removeItem('auth')
        setIsAuth(false)
    }

    return <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        logIn,
        logOut
    }}>
        {children}
    </AuthContext.Provider>
}