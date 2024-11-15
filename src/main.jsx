import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Errorpage from './components/Errorpage';
import Home from "./components/Home"
import Root from './components/Root';
import ProductDetails from './components/ProductDetails';
import Statistics from './components/Statistics';
import Dashboard from './components/Dashboard';
const router = createBrowserRouter([
{
  path: "/",
  element:<Root></Root>,
  errorElement: <Errorpage></Errorpage>,
  children:[
    {
      path:"/",
      element: <Home></Home>,
    },
    {
      path: "/ProductDetails/:product_id",
      loader: async({params}) =>{
        const res = await fetch("products.json");
        const products = await res.json();
        const product = products.find((p)=>p.product_id === params.product_id);
        return product || null;
      },
      element: <ProductDetails></ProductDetails>
    },{
      path: "/Statistics",
      element:<Statistics></Statistics>
    },
    {
      path: "/Dashboard",
      element:<Dashboard></Dashboard>
    } 
  ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
