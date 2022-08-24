import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer className='footer' id='footer'>
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <div className='display-4 fw-bold'>LOGO</div>
                    <div className='fs-4 mt-5'>+84 988 449 259</div>
                    <div className='text-muted mt-3'>contact@yourwebsite.com <br />
                    99 S.t Jamblo Park Pekanbaru 28292. <br />
                    Indonseia
                    </div>
                         <div className="row mt-5   ">
                            <div className="col">1</div>
                            <div className="col">2</div>
                            <div className="col">3</div>
                            <div className="col">4</div>
                            <div className="col">5</div>
                         </div>
                </div>
                <div className="col">
                    <div className='fs-4 mt-3 fw-bold'>Useful Links</div>

                    <div className='text-muted mt-5 lh-lg'>
                        <div>About Us</div>
                        <div>Corporate Profile</div>
                        <div>Our Team</div>
                        <div>Portfolio</div>
                        <div>Our Office</div>
                    </div>
                </div>
                <div className="col">
                <div className='fs-4 mt-3 fw-bold'>Footer Links</div>

                    <div className='text-muted mt-5 lh-lg'>
                        <div>About Us</div>
                        <div>Corporate Profile</div>
                        <div>Our Team</div>
                        <div>Portfolio</div>
                        <div>Our Office</div>
                    </div>
                </div>
                <div className="col">

                <div className='fs-4 mt-3 fw-bold'>Footer Links</div>
                <div className='mt-5 fw-bold'>Pariatur xcepteur sint occaecat <br />
                cupidatat non proident
                </div>
                <div className='text-muted mt-3'> June 16,2019</div>

                <div className='mt-3 fw-bold'>Pariatur xcepteur sint occaecat <br />
                cupidatat non proident
                </div>
                <div className='text-muted mt-3'> June 16,2019</div>
                </div>
            </div>
        </div>
        <hr />
        <div className='text-center text-muted mt-4'>CopyRight 2019 @Name PSD Template. All Right Reserved.</div>
    </footer>
  )
}

export default Footer