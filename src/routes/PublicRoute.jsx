import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Blog from "../components/pages/Blog";
import ChefsSection from "../components/homeCom/ChefsSection";
import ChefDetails from "../components/homeCom/ChefDetails";
import ErrorPage from "../components/pages/ErrorPage";


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
                path: ':id',
                element: <ChefDetails></ChefDetails>,
                loader: ({param})=>fetch(`https://irish-recipe-assignment-server.vercel.app/chefs/${param.id}`)
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
    // {
        
    //         path: '/chefs',
    //         element: <ChefsSection></ChefsSection>,
    //          children: [
    //             {
    //                 path: ':id',
    //                 element: <ChefDetails></ChefDetails>,
    //                 loader: ({param})=>fetch(`https://irish-recipe-assignment-server.vercel.app/chefs/${param}`)
    //             },
    //          ]
         
         
    // }
])


export default router;