import React, { createContext, useContext } from 'react'
import { useState } from 'react'
import Product from '../Product/Product'


export let CounterContext = createContext()

export default function CounterContextProvider(props) {
    let [count,setCount] =useState([])
const getProductsQuantity =(id) =>{
  return count.find((Product)=> Product.id ===id) ?.quantity ||0;

}
const incrementCountQuantity =(id) =>{
  setCount((currentproducts) =>{
  if(currentproducts.find((product) => product.id ===id) ==null){
    setCount([...count, {id:id,quantity:1}])
  }else{
    setCount(currentproducts.map((product) => product.id) === id?{...Product,quantity: Product.quantity + 1}:Product);
  }
  return Product;
})}
const decrementCountQuantity =(id) =>{
  setCount((currentproducts) =>{
  if(currentproducts.find((product) => product.id ===id) ==null){
    return currentproducts.filter((product)=> product.id !==id)
  }else{
    setCount(currentproducts.map((product) => product.id) === id?{...Product,quantity: Product.quantity - 1}:Product);
  }
  return Product;
})}

    function incrementCount() {
        setCount(count + 1)
      }
      
  function decrementCount() {
    setCount(count - 1)
  }
  return (
    <div>
    <CounterContext.Provider value={{count, incrementCount, decrementCount,getProductsQuantity,incrementCountQuantity }}>
             {props.children}
      </CounterContext.Provider>  
    </div>
  )
}
