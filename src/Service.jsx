import React from 'react'
import imgService from './img/imgService.svg'
import imgAbout from './img/imgAbout.svg'
import imgHome from './img/imgHome.svg'
import Card from "./Card"
import Slide from 'react-reveal/Slide';
function Service() {
    return (
        <>
         <Slide left>
           <div className="contaner-fluid my-5">
               <div className="container  d-flex flex-column justify-content-center align-items-center">
                   <h1>Welcome to our <span style={{color:"#6c63ff"}}>Service</span></h1>
                   <hr className="w-50 "/>
               </div>
               <div className="row my-5 mx-5">
                  <Card serviceImg={imgService} title="Web Design" text="We provide excellent designs" />
                  <Card serviceImg={imgAbout} title="Digital Marketing" text="We provide excellent Marketing support" />
                  <Card serviceImg={imgHome} title="Teaching" text="We provide excellent Guidance and support" />
               </div>
           </div>
           </Slide>
        </>
    )
}

export default Service
