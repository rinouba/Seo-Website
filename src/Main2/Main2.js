import React from 'react'
import imageleft from "../imgs/circle7428.png"
import "./Main2.css"
import imagebackground from "../imgs/backgroundmain2.png"
function Main2() {
  return (
    <div className='container main2 position-relative' id='services'>
        <div className="row">
            <div className="col">
                <img src={imageleft} className="w-75 h-100 " />
                <img src={imagebackground} className="image-left-main2" />
            </div>
            <div className="col col-right">
                <div className='fw-bold display-4'>All-in-One Web <br />
                Solution For Your <br />
                Business
                </div>
                <div className='text-muted mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Numquam at, debitis ipsum inventore soluta amet iusto illo <br />
                     porro fuga molestiae officiis quam, accusantium repudiandae? <br />
                      Magni, rerum! Unde delectus ipsam at perspiciatis.
                </div>

                <div className='text-muted mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                     Corrupti, sunt? Consectetur, magni. Cumque, accusamus. <br /> 
                    Sed quae suscipit nobis cumque.
                </div>

                <button className='btn btn-warning mt-5'>LEARN MORE</button>
            </div>
        </div>
    </div>
  )
}

export default Main2