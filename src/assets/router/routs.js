import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostIdPage from "../pages/PostIdPage.jsx";
import Login from "../pages/Login.jsx";

export const privateRoutes = [
    {
        path: '/about',
        component: About,
        exact: true
    },
    {
        path: '/posts',
        component: Posts,
        exact: true
    },
    {
        path: '/posts/:id',
        component: PostIdPage,
        exact: true
    },
    {
        path: '/*',
        component: Posts,
        exact: true
    },
]

export const publicRoutes = [
    {
        path: '/login',
        component: Login,
        exact: true
    },
]