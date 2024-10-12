import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from "react-slick";
import { CounterContext } from '../CounterContext/CounterContext';
import { useContext } from 'react';
import style from './ProductDetails.module.css'
import arika from '../../Assets/arika.png'
import arika2 from '../../Assets/arika2.png'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';

export default function ProductDetails() {
let {incrementCount} = useContext(CounterContext)
let {decrementCount} = useContext(CounterContext)
const {getProductQuantity,incrementCountQuantity,decrementCountQuantity} =useContext (CounterContext);
 const quantity = getProductQuantity(id);
    const [loading,setLoading] =useState([])
    const [product,setProduct]= useState(true)
    let {id} =useParams()
    async function ProductDetails(id) {
       let {data} = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        setProduct(data);
        console.log(data);
        setLoading(false)
    }
    useEffect(()=>{
      ProductDetails(id);
    },[id]);

    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplayspeed:1000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    
  return ( <>
    <div className='container'>
      <div className='row w-1400 h-100'>
      
        <Link to={"home"}>Home <i className='fas fa-angle-right'/> <Link to={"shop"}>Shop
       <i className='fas fa-angle-right'/></Link><Link to={`/productdetails/${product.id}`}>{product.name}</Link></Link>
      </div>
      </div>
      
   
{loading ?(
  <div>Loading...</div>
):(
  <div className="container">
  <div className='row align-items-center'>
    <div className='col-md-4'>
    <Slider {...settings}>
       
    {Array.isArray(product.category.image) ? (
  product.category.image.map(img => (
    <img src={img} />
  ))
) : (
  <img src={product.category.image} className='w-100' />
)}
</Slider>
    </div>
    
    <div className='col-md-8'>
      <div className='details mt-10'>
        <h3 className='h5'>{product.title}</h3>
        <p className=''>{product.description}</p>
        <span className='font-sm'>{product.category.name}</span>
        <div className='d-flex py-3 justify-content-between align-items-center'>
        <span className='font-sm text-main'>{product.price} EGP</span>
        <span className='font-sm'>
        <i className='fa fa-star rating-color me-2'>{product.ratingsAverage}</i>
        </span>
      </div></div>
      <div className='button-container'>
      <button className='btn btn-outline-secondary text-main-dark w-120' >Add to cart</button>
      <button className='btn btn-outline-secondary text-main-dark w-120' >  - </button>
      <button className='btn btn-outline-secondary text-main-dark w-120 ml-50'> + Compare</button>
      </div>
    </div>
    <hr className={`${style.line}`}></hr>
    <h5 className={style.font}>
    SKU  : SS001
    Category: Sofa,Chair,Home,Shop
    Tags : Sofas
    </h5>
    <h5 className={style.share}>
    Share: </h5>
    <i className={style.awesome}>
    <i className="fab fa-facebook-f">
      <i className="fab fa-linkedin">
    <i className="fab fa-twitter"></i></i></i>
    </i>
    </div>
  </div>
)}
   
    
    <div className='container'>
    
                     <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl mx-auto mt-8">
                        <div className="flex space-x-8 border-b pb-4 mb-4">
                            <button className="text-black font-bold">Description</button>
                            <button className="text-gray-500">Additional Information</button>
                            <button className="text-gray-500">Reviews [5]</button>
                        </div>
                        <p className="text-gray-700">
                            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                        </p>
                        <p className="text-gray-700 mt-4">
                            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                        </p>
                       <div className='container'>
                        <div className='row'>
                          <div className='col-md-6'>
                          <img src={arika} className={`${style.arika}`}/>
                          </div>
                          
                          <div className='col-md-6'>
                          <img src={arika2} className={`${style.arika2}`}/>
                            </div></div> </div></div>
                </div>
                
                <h2>Related Products</h2>
  
<FeaturedProducts/>
                </>
  )
}
