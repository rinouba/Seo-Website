import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <>
        <nav className='mt-3'>
          <div className="container text-white d-flex justify-content-between text-uppercase">
            <div className='pt-3 fs-3 fw-bold text-dark'>LOGO</div>

            <div className='fs-5 fw-bolder d-flex align-items-center text-dark'>
              <div className='d-inline-flex p-3'><a href="#home">Home</a> </div>
              <div className='d-inline-flex p-3'><a href="#aboutus">About Us</a></div>
              <div className='d-inline-flex p-3'><a href="#services">services</a></div>
              <div className='d-inline-flex p-3'><a href="#news">news</a></div>
              <div className='d-inline-flex p-3'><a href="#pages">pages</a></div>
              <div className='d-inline-flex p-3'><a href="#footer">contact</a></div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar