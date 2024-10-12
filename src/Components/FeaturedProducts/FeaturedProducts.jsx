import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { Link } from 'react-router-dom'






export default function FeaturedProducts() {
  const [loading,setLoading] =useState(true)
  const [products,setProducts]= useState([])
 
  const [visibleProducts,setVisibleProducts] = useState(8)
  
  async function getProducts() {
  let {data} = await axios.get(`https://api.escuelajs.co/api/v1/products`)
    console.log(data)
   setProducts(data)
    setLoading(false)

  }
  useEffect(() =>{
    getProducts()
  },[])
  
const handleShowmore = ()=>{
  setVisibleProducts(visibleProducts+4)
}

  return (
   <>
   {loading ?(
   <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
 
 ):(
  
  <div className='row'>
   {products.slice(0,visibleProducts).map((product) =>(
    <div key={product.id} className=' col-md-3'>
<div className='product'>
<img src={product.images}  className="img-fluid custom-image" width={300} height={200} />
<h5 className='title' >{product.title}</h5>

<div className='d-flex py-3 justify-content-between align-items-center'>
<span className='font-sm'>{product.price} EGP</span>
</div>

<button class="btn bg-main btn-outline-success">Add To Cart</button>
  </div> </div>
  

  ))}


  {visibleProducts<products.length&&(
    <div className='text-center my-4'>
    <button className="btn btn-success" onClick={handleShowmore}>Show More</button>
  
  </div>)}
  </div>
  )}
  </>
 )
}
