import React from 'react'
import style from '../Footer/Footer.module.css'

export default function Footer() {
  return (
    <>
    <div className='container'>
        <div className="row">
          <div className='col-md-3'>
            <h3>Funiro.</h3>
            <p>400 University Drive Suite 200 Coral Gables,
              FL 33134 USA</p>
          </div>
          <div className="col-md-3">
            <h4>Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Help</h4>
            <p>Payment Options</p>
            <p>Returns</p>
            <p>Privacy Policies</p>
          </div>
          <div className="col-md-3">
            <input type="email" placeholder='Enter Your Email Address' />
            <button>SUBSCRIBE</button>
          </div>
        </div>
</div>
<div className='container'>
  <div className='row'>
<hr className={`${style.line}`}></hr>
<p className={`${style.footer}`}>2023 furino. All rights reverved</p>
</div>
</div>
    </>
  )
}
