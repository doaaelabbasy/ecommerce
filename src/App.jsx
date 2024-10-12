import React from 'react'
import Layout from './Components/Layout/Layout'
import Home  from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Shop from './Components/Shop/Shop'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import ProductDetails from  './Components/ProductsDetails/ProductDetails'
import Product from './Components/Product/Product'
import Products from './Components/Products/Products'
import CounterContextProvider from './Components/CounterContext/CounterContext'
import Checkout from './Components/CheckOut/CheckOut'
import SingleProduct from './Components/SingleProduct/SingleProduct'
export default function App() {

  let routes =createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'shop',element:<Shop/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:'Cart',element:<Cart/>},
      {path:'productdetails',element:<ProductDetails/>},
      {path:'singleproduct',element:<ProductDetails/>},
      {path:'products',element:< Products/>},
      {path:'productdetails/:id',element:<SingleProduct/>},
      {path:'product/:id',element:<Product/>},
      {path:'cart/:id',element:<Cart/>},
      {path:'checkout',element:<Checkout/>},




         
          
        ]},
      
      ])
  


      return (
    <div>
      <CounterContextProvider>
      <RouterProvider router={routes}>
      </RouterProvider>
      </CounterContextProvider>
    </div>
  )
}

