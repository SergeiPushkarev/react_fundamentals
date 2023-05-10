import React from 'react'
import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context/AuthContext'

const LoginPage = () => {
    const {setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const login = (e)=>{
        e.preventDefault()
        localStorage.setItem("auth", "true")
        setIsAuth(true)
        navigate('/')
    }
  return (
    <div>
        <h1>Добро пожаловать!</h1>
        <form>
            <MyInput type="text" placeholder={'Введите логин'} />
            <MyInput type="password" placeholder={'Введите пароль'} />
            <MyButton type="submit" onClick={login} >Войти</MyButton>
        </form>
    </div>
  )
}

export default LoginPage