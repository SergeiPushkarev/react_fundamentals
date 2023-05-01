import React from "react";
import Posts from "./pages/Posts";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/UI/navbar/Navbar";
import ErrorPage from './components/UI/errorPage/ErrorPage'
import style from './styles/App.css'
import PostSingle from "./components/PostSingle";

function App() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route path="about" element={<About/>}/>
                    <Route path="posts" element={<Posts/>}/>
                    <Route path="posts/:id" element={<PostSingle/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;