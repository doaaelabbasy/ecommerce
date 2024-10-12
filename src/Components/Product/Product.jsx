import React, { useEffect,usestate } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



export default function Product() {
const Product =()=>{
  const {id}=useParams();
  const [product,setProduct]= usestate([]);
  const [loading,setLoading] =usestate([false]);

  useEffect (() =>{
    const fetchProduct = async ()=>{
      setLoading(true);
      const response =await fetch (`https://api.escuelajs.co/api/v1/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    }
    fetchProduct();
  },[]);

  const Loading =()=>{
    return(
<>
Loading......
</> 
) }
}
const ShowProduct =()=>{
  return(
<>
<div className='col-md-6'>
  <img src={Product.image} alt={Product.title} height="400px" width="400px"/>
   </div>
   
<div className='col-md-6'>
  <h4 className='text-uppercase text-black-50'>{Product.category}</h4>
  <h1 className='display-5'>{Product.title}</h1>
  <p className='lead'>Rating {Product.rating && Product.rating.rate}
    <i className='fa fa-start'></i> </p>
  <h3 className="display-6 fw-bold my-4">${Product.price}</h3>
  <p className='lead'>{Product.description}</p>
  <button className='btn btn-outline-dark px-4 py-2'>Add to Cart</button>
  <Link to="/cart" className='btn btn-outline-dark ms-2 px-3 py-2 '>Go to cart</Link>
  
</div>
   </>
  )
}


  return (
    <div>
      <div className='container py-5'>
        <div className='row py-5'>
        
        </div>

      </div>
    </div>
  )
}
