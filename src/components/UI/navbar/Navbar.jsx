import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.main}>
      <div className={style.navbar}>
        <NavLink className={style.navbar__link} to={"/about"}>About</NavLink>
        <NavLink className={style.navbar__link} to={"/posts"}>Posts</NavLink>
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