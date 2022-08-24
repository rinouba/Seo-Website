import React from 'react'
import "./Main3.css"
import imagebackgroundmain3 from "../imgs/backgroundmain3.png"
function Main3() {
  return (
    <div className='container main2 pb-5 position-relative' id='news'>
        <img src={imagebackgroundmain3} className="imagebackgroundmain3" />
        <div className="row">
            <div className="col mt-5">
            <div className='display-3 fw-bold'>Over 788+ <br />
            completed work <br />
            & still counting
            </div>
            <div className='mt-5 text-muted'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                 Voluptatem, aliquam culpa sequi rem suscipit mollitia labore <br />
                  animi earum voluptatum ipsa tempore maiores debitis eligendi  <br />
                  quae praesentium officiis, architecto nam maxime aspernatur
            </div>
            </div>
            <div className="col">

                <div className="row">

                    <div className="col bg-white m-3 card-main3 mt-5">
                        <div className='fw-bold display-4 mx-4 mt-5 text-warning'>1238</div>
                        <div className='text-muted mt-3 mx-4'>Consulted</div>
                    </div>

                    <div className="col bg-white m-3 mb-5">
                        <div className='fw-bold display-4 mx-4 mt-5 text-info'>17k</div>
                        <div className='text-muted mt-3 mx-4'>Satisfied Customers</div>
                    </div>

                </div>

                <div className="row">

                <div className="col bg-white m-3 mt-5 pb-5">
                    <div className='fw-bold display-4 mx-4 mt-5 text-danger'>13</div>
                    <div className='text-muted mt-3 mx-4'>Years Experience</div>
                </div>

                <div className="col bg-white m-3 mb-5">
                    <div className='fw-bold display-4 mx-4 mt-5 text-success'>345</div>
                    <div className='text-muted mt-3 mx-4'>Projects Done</div>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main3