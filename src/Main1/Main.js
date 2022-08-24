import React from 'react'
import './Main1.css'
import icon1 from "../imgs/icons/icon1.png"
import icon2 from "../imgs/icons/icon2.png"
import icon3 from "../imgs/icons/icon3.png"
import icon4 from "../imgs/icons/icon4.png"
import icon5 from "../imgs/icons/icon5.png"
function Main() {
  return (
    <div className='container ' id='aboutus'>
      <div className='main1'>
    <div className="row text-center">
        <div className="col m-4 text-start">
          <div className='display-4 fw-bold'>Awesome <br />
              Service SEO <br />
              Template
          </div>
          <div className='text-muted mt-3'>Lorem ipsum dolor sit amet consectetur, elit. <br />
             Qui earum voluptas, eligendi ipsam <br />
             et aspernatur.</div>

        </div>

        <div className="col bg-white m-4">

          <img src={icon1} className="mt-4" />
          <div className='fw-bold fs-5 mt-4'>Establish Goals</div>
          <div className='m-4 text-muted'>Thereare many variations of passages of <br />
          but the majority have suffered alteration <br />
          in some form.
          </div>
          <div className='text-danger pb-5'>Read More</div>

        </div>

          
        <div className="col bg-white m-4">

<img src={icon2} className="mt-4" />
<div className='fw-bold fs-5 mt-4'>Work With a Team</div>
<div className='m-4 text-muted'>Thereare many variations of passages of <br />
but the majority have suffered alteration <br />
in some form.
</div>
<div className='text-danger pb-5'>Read More</div>


        </div>

    </div>


    <div className="row text-center">

          
        <div className="col bg-white m-4">

<img src={icon3} className="mt-4" />
<div className='fw-bold fs-5 mt-4'>Get Results</div>
<div className='m-4 text-muted'>Thereare many variations of passages of <br />
but the majority have suffered alteration <br />
in some form.
</div>
<div className='text-danger pb-5'>Read More</div>

        </div>

        <div className="col bg-white m-4">

<img src={icon4} className="mt-4" />
<div className='fw-bold fs-5 mt-4'>Media Strategy</div>
<div className='m-4 text-muted'>Thereare many variations of passages of <br />
but the majority have suffered alteration <br />
in some form.
</div>
<div className='text-danger pb-5'>Read More</div>

        </div>

        <div className="col bg-white m-4">

<img src={icon5} className="mt-4" />
<div className='fw-bold fs-5 mt-4'>Conversion Rate</div>
<div className='m-4 text-muted'>Thereare many variations of passages of <br />
but the majority have suffered alteration <br />
in some form.
</div>
<div className='text-danger pb-5'>Read More</div>

        </div>



    </div>
    </div>

    </div>
  )
}

export default Main