import React from 'react'
import "./Header.css"
import imgleftheader from "../imgs/seo-illustration-3.png"
import backgroundheader from "../imgs/backgroundheader.png"
function Header() {
  return (
    <header className='container' id='home'>
        <img src={backgroundheader} className='backgroundheader' />
        <div className="row">
          
        <div className='artice-left-header col'>

        <div className='display-2 fw-bold'>
            Boost Traffic <br />
            & Rank with <br />
            BAHA.
        </div>

        <div className='text-muted mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
        Explicabo fugit omnis cum, molestias consequatur dolores quia <br />
        aliquam illo est quam tempora. 
        </div>

        <button className='btn btn-warning mt-5'>GET A QUOTE</button>

        </div>

        <div className="col">
            <img src={imgleftheader} className="img-left-header" />
        </div>
        </div>

    </header>
  )
}

export default Header