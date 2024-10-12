import React from 'react'
import { useState ,useEffect } from 'react'
import axios from  'axios'
import  { Link, useParams } from  'react-router-dom'
import { Grid } from 'react-loader-spinner'
import shop from '../../Assets/ff74c027a1888544144abe4be6e02cbf.jpeg'
import style from './Shop.module.css'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import { BallTriangle } from 'react-loader-spinner'




export default function Shop() {
  const [loading,setLoading] =useState(true)
  const [products,setProducts]= useState([])
const[filter,setFilter]=useState([])

const [visibleProducts,setVisibleProducts] = useState(12)

  async function getProducts() {
    let {data} =await axios.get(`https://api.escuelajs.co/api/v1/products`)
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

    <div className="container">
    <img src={shop} className={`${style.shop}`}/>
    <div className={`${style.content}`}>
    <p className={`${style.p}`}>Shop</p>
    Home <i class="fas fa-angle-right"></i> Shop
    </div></div>

    <div class="toolbar">
        <div class="filter">
            <i class="fas fa-filter"></i> Filter
        </div>
        <div class="view-options">
            <i class="fas fa-th"></i>
            <i class="fas fa-bars"></i>
        </div>
        <div class="results-info">
            Showing 1–16 of 32 results
        </div>
        <div class="show">
            Show <input type="text" value="16"/>
        </div>
        <div class="sort-by">
            Short by <select>
                <option>Default</option>
            </select>
        </div>
    </div>
    <div className='container'>
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
  //<Link to ={'/productdetails/${product.id}'}>
  
    <div key={product.id} className=' col-md-3'>
<div className='product'>
<img src={product.images}  className="img-fluid custom-image" width={300} height={200} />
<h5 className='title' >{product.title}</h5>

<div className='d-flex py-3 justify-content-between align-items-center'>
<span className='font-sm'>{product.price} EGP</span>
</div>

<button class="btn bg-main btn-outline-success">Add To Cart</button>
  </div> </div>
  //</Link>
  
  ))}


  {visibleProducts<products.length&&(
    <div className='text-center my-4'>
    <button className="btn btn-outline-success-active p-2 m-2" onClick={handleShowmore}>1</button>
    <button className="btn btn-outline-success p-2 m-2" onClick={handleShowmore}>2</button>
    <button className="btn btn-outline-success p-2 m-2" onClick={handleShowmore}>3</button>
    <button className="btn btn-outline-success p-2 m-2" onClick={handleShowmore}>Next</button>

  
  </div>)}
  </div>
  )}
  </div>
 

{filter.map((product)=>{
  return(
    <div className='col-md-3 mb-4'>
    <div class="card h-100 text-center p-4" key={product.id}>
  <img src={product.image} class="card-img-top" alt={product.title}
  height="250px"/>
  <div class="card-body">
    <h5 class="card-title mb-0">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 
  </div>
</div>
</div>
  )
})}
    
   
        </>
     )
    }
  
