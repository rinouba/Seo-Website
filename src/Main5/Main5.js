import React from 'react'
import "./Main5.css"
import imagebackgroundmain5 from "../imgs/backgroundmain4.png"
function Main5() {
  return (
    <div className="position-relative">


    <div className='container mt-5  '>
    <img src={imagebackgroundmain5} className='main5' />
                     <div className='text-center'>
        <div className='display-4 fw-bold text-main5'>What Our Client Think <br /> About Us.</div>

        <div className='text-muted fst-italic text-main5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium dicta <br />
            repudiandae dolore iste ipsa! eligendi qui illum similique perferendiseaque    <br />
            quisquam quis officiis perferendis fugiat?</div>


                <div className='fw-bold fs-4 text-main5-2'>-John Vicks</div>

                 <div className='text-muted fs-6'>Company ABCD</div>

                 </div>

    </div>
    </div>
  )
}

export default Main5