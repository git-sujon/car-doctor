import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import About from '../Pages/About/About';
import Appointment from '../Pages/Appointment/Appointment';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';
import Services from '../Pages/Services/Services'
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SIgnUp/SignUp';
import Checkout from '../Pages/Checkout/Checkout'
import Orders from '../Pages/Orders/Orders';
import PrivateRoute from './PrivateRoute';


const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
            path:'/about',
            element:<About></About>
           },
           {
            path:'/services',
            element:<Services></Services>
           },
           {
            path:'/blog',
            element:<Blog></Blog>
           },
           {
            path:'/contact',
            element:<Contact></Contact>
           },
           {
            path:'/appointment',
            element:<Appointment></Appointment>
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/register',
            element:<SignUp></SignUp>
           },
           {
            path:'/checkout/:id',
            element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
           },
           {
            path:'/orders',
            element:<PrivateRoute><Orders></Orders></PrivateRoute>
            // loader:()=>fetch(`http://localhost:5000/orders`)
           }
        ]
    }
])


export default router;