import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../../../pages/About.jsx";
import Posts from "../../../pages/Posts.jsx";
import PostIdPage from "../../../pages/PostIdPage.jsx";
import {privateRoutes, publicRoutes} from "../../../router/routs.js";
import {AuthContext} from "../../../context/useContext.js";
import Loader from "../loader/Loader.jsx";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path}
                           element={<route.component/>}
                           path={route.path}
                           exact={route.exact}/>
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path}
                           element={<route.component/>}
                           path={route.path}
                           exact={route.exact}/>
                )}
            </Routes>
    )
        ;
};

export default AppRouter;