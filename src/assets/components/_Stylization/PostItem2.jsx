import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "../UI/navbar/Navbar.jsx";
import AppRouter from "../UI/router/AppRouter.jsx";
import {AuthContext} from "../../context/useContext.js";

const PostItem2 = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default PostItem2;