import Gallery from "../pages/GalleryPage/Gallery";
import Home from "../pages/HomePage/Home/Home";
import Main from "../pages/Main/Main";
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
            }
        ]
    }
])