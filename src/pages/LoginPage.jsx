import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context/AuthContext'

const LoginPage = () => {
  const {logIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/';
  const returnPage =()=> navigate(from, {replace:true})
  const logInRed= ()=>{
    logIn(returnPage)
  }
  

  return (
    <div>
        <h1>Добро Пожаловать!</h1>
        <MyInput type="text" placeholder={'Введите логин'} />
        <MyInput type="password" placeholder={'Введите пароль'} />
        <MyButton onClick={logInRed}>Войти</MyButton>
    </div>
  )
}

export default LoginPage