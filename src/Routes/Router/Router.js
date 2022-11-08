import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../component/Pages/AboutUs/AboutUs";
import Login from "../../component/Pages/Auth/Login/Login";
import Signup from "../../component/Pages/Auth/Signup/Signup";
import Home from "../../component/Pages/Home/Home/Home";
import Services from "../../component/Pages/Services/Services";
import Main from "../../Layout/Main/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: ([
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            }
        ])
    }
])
