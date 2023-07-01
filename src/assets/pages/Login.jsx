import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput.jsx";
import MyButton from "../components/UI/button/MyButton.jsx";
import {AuthContext} from "../context/useContext.js";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login} action="">
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;