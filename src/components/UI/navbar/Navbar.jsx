import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import MyButton from '../button/MyButton'
import style from './Navbar.module.css'
import { useContext } from 'react'

const Navbar = () => {
  const {isAuth,logOut} = useContext(AuthContext)
  
  
  return (
    <div className={style.main}>
      <div className={style.navbar}>
        {!isAuth  
          ? <MyButton to={'/login'} children = {"Войти"}/>
          : <MyButton onClick={logOut} children={"Выйти"}/>
        }
        <div>
          <NavLink className={style.navbar__link} to={"/about"}>About</NavLink>
          <NavLink className={style.navbar__link} to={"/posts"}>Posts</NavLink>
        </div>
    </div>
    <div className={style.App}>
      <Outlet/>
    </div>
    <div className={style.footer} >
      Kazan.2023
    </div>
    </div>
  )
}

export default Navbar