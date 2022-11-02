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
        ]
    }
])


export default router;