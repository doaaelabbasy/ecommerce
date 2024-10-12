import React from 'react'
import style from '../Contact/Contact.module.css'
import contact from '../../Assets/ff74c027a1888544144abe4be6e02cbf.jpeg'
import { HiOutlineTrophy } from "react-icons/hi2";
import contactlogo from '../../Assets/a74736d502746301ed573ed8940fc322.png'

export default function Contact() {
  return (<>
  <div className="container">
  <img src={contact} className={`${style.contact}`}/>
  <div className={`${style.content}`}>
  <img src={contactlogo} className={`${style.contactlogo}`}/>
  <p className={`${style.p}`}>Contact</p>
  Home <i class="fas fa-angle-right"></i> Contact
  </div></div>
    <h2>Get In Touch With Us</h2>
    <h6>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</h6>
   <div className='container'>
    <div className="row">
      <div className="col-md-6">
    <i className="fas fa-map-marker-alt"></i> address
    <h5>236 5th SE Avenue, New York NY10000, United States</h5>

    <i className=" 	fas fa-phone"></i> phone
    <h5>Mobile: +(84) 546-6789
    Hotline: +(84) 456-6789</h5>

    <i className="fas fa-clock"/> working time
    <h5>Monday-Friday: 9:00 - 22:00
    Saturday-Sunday: 9:00 - 21:00</h5>
</div>


  <div className="col-md-6">
  <div class="form-group">
            <label for="name">Your name</label>
            <input type="text" id="name" placeholder="Abc"/>
       </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" id="email" placeholder="Abc@def.com"/>
        </div>
        <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" placeholder="This is an optional"/>
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" placeholder="Hi! I'd like to ask about"></textarea>
        </div>
        <button className={`${style.submit}`}>Submit</button>
        </div>
  </div>
</div>


    <div className='container'>
      <div className={`${style.container}`}>
      <div className="row">
        <div className=" col-md-3">
          <i className="fas fa-trophy"></i>
          <h3 className={`${style.title}`}>High Quality</h3>
          <p className={`${style.subtitle}`}>crafted from top materials</p>
        </div>
        <div className="col-md-3">
          <i className="fas fa-shield-alt"></i>
          <h3 className={`${style.title}`}>Warranty Protection</h3>
          <p className={`${style.subtitle}`}>Over 2 years</p>
        </div>
        <div className="col-md-3">
          <i className="fas fa-shipping-fast"></i>
          <h3 className={`${style.title}`}>Free Shipping</h3>
          <p className={`${style.subtitle}`}>Order over 150 $</p>
        </div>
        <div className="col-md-3 ">
          <i className="fas fa-headset"></i>
          <h3 className={`${style.title}`}>24/7 Support</h3>
          <p className={`${style.subtitle}`}>Dedicated support</p>
        </div>
      </div>
    </div>
       </div>
       </> );
        }
      
