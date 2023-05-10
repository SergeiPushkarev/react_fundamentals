import React from 'react'
import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import MyButton from '../button/MyButton'
import style from './Navbar.module.css'

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext)
  const logout = () =>{
    setIsAuth(false)
    localStorage.removeItem("auth")
  }
  return (
    <div className={style.main}>
      <div className={style.navbar}>
        <MyButton onClick = {logout}>Выйти</MyButton>
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