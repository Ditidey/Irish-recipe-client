import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Blog from "../components/pages/Blog";
import ChefsSection from "../components/homeCom/ChefsSection";
import ChefDetails from "../components/homeCom/ChefDetails";
import ErrorPage from "../components/pages/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
               path: '/chefs',
               element: <ChefsSection></ChefsSection>,
                
            },
            {
                path: '/chefs/:id',
                element:  <ProtectedRoute><ChefDetails></ChefDetails></ProtectedRoute>,
                loader: ({params})=>fetch(`https://irish-recipe-assignment-server-ditidey2017-gmailcom.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
   
])


export default router;