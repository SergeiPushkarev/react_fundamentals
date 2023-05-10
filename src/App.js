import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/UI/loader/Loader";
import Navbar from "./components/UI/navbar/Navbar";
import { AuthContext } from "./context/AuthContext";
// import RequireAuth from "./router/RequireAuth";
import { privateRoutes, publicRoutes } from "./router/router";
import "./styles/App.css";


function App() {
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


    return(
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navbar/>}>
                        {!isAuth
                            ? publicRoutes.map((r)=>
                                <Route key={r.path} path={r.path} element={r.element}/>)
                            : privateRoutes.map((r)=>
                                <Route key={r.path} path={r.path} element={r.element}/>)
                        }
                        </Route>
                    </Routes>
                </BrowserRouter>
        </AuthContext.Provider>
        
    )
}

export default App;