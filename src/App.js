import React from "react";
import Posts from "./pages/Posts";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/UI/navbar/Navbar";
import ErrorPage from './components/UI/errorPage/ErrorPage'
import style from './styles/App.css'
import PostSingle from "./components/PostSingle";
import LoginPage from "./pages/LoginPage";
import Auth from "./components/hoc/Auth";
import { AuthProvider } from "./context/AuthContext";

function App() {
    
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar/>}>
                        <Route element={<Auth/>}>
                            <Route path="about" element={<About/>}/>
                            <Route path="posts" element={<Posts/>}/>
                            <Route path="posts/:id" element={<PostSingle/>}/>
                        </Route>
                        <Route path="*" element={<ErrorPage/>}/>
                        <Route path="login" element={<LoginPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;