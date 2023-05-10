import { Navigate } from "react-router-dom";
import PostSingle from "../components/PostSingle";
import ErrorPage from "../components/UI/errorPage/ErrorPage";
import About from "../pages/About";
import LoginPage from "../pages/LoginPage";
import Posts from "../pages/Posts";

export const publicRoutes = [
    {path: 'about', element: <About/>},
    {path: '*', element: <Navigate to='login'/>},
    {path: 'login', element: <LoginPage/>}

]

export const privateRoutes = [
    {path: 'about', element: <About/>},
    {path: 'posts', element: <Posts/>},
    {path: 'posts/:id', element: <PostSingle/>},
    {path: '*', element: <ErrorPage/>},
    {path: 'login', element: <LoginPage/>}

]