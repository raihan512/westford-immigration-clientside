import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../component/Pages/AboutUs/AboutUs";
import Login from "../../component/Pages/Auth/Login/Login";
import Signup from "../../component/Pages/Auth/Signup/Signup";
import Home from "../../component/Pages/Home/Home/Home";
import Services from "../../component/Pages/Services/Services";
import Main from "../../Layout/Main/Main";
import ServicePage from "../../component/Pages/ServicePage/ServicePage";
import MyReviews from "../../component/Pages/MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: ([
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/services")
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: () => fetch("http://localhost:5000/services")
            },
            {
                path: "/services/:id",
                element: <ServicePage></ServicePage>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "my-reviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/services")

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
