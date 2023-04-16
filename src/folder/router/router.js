import Gallery from "../pages/GalleryPage/Gallery";
import Home from "../pages/HomePage/Home/Home";
import Login from "../pages/LoginPage/Login";
import Main from "../pages/Main/Main";
import SignUp from "../pages/SignUp/SignUp";
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            }
        ]
    }
])