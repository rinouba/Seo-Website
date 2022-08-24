import React from 'react'
import "./Main4.css"
function Main4() {
  return (
    <div className='container main2'>
        <div className='text-center'>
            <div className='display-1 fw-bold'>Our Work</div>
            <div className='text-muted mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elitVoluptate velit odio  <br />
                sint asperiores consectetur adipisicing.</div>
        </div>

        <div className="row text-center mt-5">
            <div className="col blocksmain4 defualtblock"></div>
            <div className="col blocksmain4"></div>
            <div className="col blocksmain4"></div>
        </div>

        
        <div className="row text-center">
            <div className="col blocksmain4"></div>
            <div className="col blocksmain4"></div>
            <div className="col blocksmain4"></div>
        </div>
        <div className='text-center mt-5'>
        <button className='btn btn-warning'>VIEW GALLERY</button>
        </div>
    </div>
  )
}

export default Main4