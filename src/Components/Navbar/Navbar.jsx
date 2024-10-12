import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/a74736d502746301ed573ed8940fc322.png'
import style from './Navbar.module.css'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
  <div class="container-fluid">
  <img src={logo}  className={`${style.logo}`}/>
    <Link class="navbar-brand" to="#">Furniro</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class={`navbar-nav mx-auto mb-2${style.header}`} >
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"shop"}>Shop</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"about"}>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"contact"}>Contact</Link>
        </li>
      </ul>
      <ul className='navbar-nav ms-auto mb-2 me-2'>
              <i class="fa fa-user"></i>
              <i class="fa fa-search"></i>
              <i class="far fa-heart"></i>
              <i class="fas fa-shopping-cart"></i>
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
