import { createBrowserRouter } from "react-router-dom";
import Login from "../../component/Pages/Auth/Login/Login";
import Signup from "../../component/Pages/Auth/Signup/Signup";
import Home from "../../component/Pages/Home/Home/Home";
import Services from "../../component/Pages/Services/Services";
import Main from "../../Layout/Main/Main";
import ServicePage from "../../component/Pages/ServicePage/ServicePage";
import MyReviews from "../../component/Pages/MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../../component/Pages/Blog/Blog";
import AddService from "../../component/Pages/AddService/AddService";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: ([
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://server-liart-six.vercel.app/services")
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: () => fetch("https://server-liart-six.vercel.app/services")
            },
            {
                path: "/services/:id",
                element: <ServicePage></ServicePage>,
                loader: ({ params }) => fetch(`https://server-liart-six.vercel.app/services/${params.id}`)
            },
            {
                path: "addservice",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "my-reviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                loader: () => fetch("https://server-liart-six.vercel.app/services")

            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
