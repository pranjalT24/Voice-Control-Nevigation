import React from 'react'
import imgContact from "./img/imgContact.svg"
import Slide from 'react-reveal/Slide';
function Contact() {
    return (
        <>
         <Slide right>
          <div className="contaner-fluid my-5">
               <div className="container  d-flex flex-column justify-content-center align-items-center">
                   <h1>Feel Free To <span style={{color:"#6c63ff"}}>Contact</span></h1>
                   <hr className="w-50 "/>
               </div>
               <div className="row my-5 mx-5">
                    <div className="col-lg-6 col-md-6 col-12 py-5 my-5 order-2">
                        <form action="">
                        <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
  <label htmlFor="floatingInput">Email address</label>
</div>
<div class="form-floating mb-3">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
  <label htmlFor="floatingPassword">Password</label>
</div>
            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 order-1">
                        <img src={imgContact} alt="no-img" className="img-fluid" />
                    </div>
               </div>
           </div>
           </Slide>
        </>
    )
}

export default Contact
