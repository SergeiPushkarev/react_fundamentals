import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


const Auth = () => {
  const location = useLocation()
  const {isAuth} = useContext(AuthContext)

  if (!isAuth) {
    return <Navigate to="/login" state={{from:location}}/>
  } else return <Outlet/>
}

export default Auth