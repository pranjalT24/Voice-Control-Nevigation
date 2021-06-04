import React from 'react'
import "./css/Home.css" 

function Componets(props) {
    return (
        <>

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center align-items-center ">
                    <div className="About-header">
                    <h1>Welcome to <span style={{color:"#6c63ff"}}>{props.title}</span> </h1>
                    <p>{props.para}</p>
                    <button type="button" class="btn btn-outline-primary">{props.button}</button>
                    </div>
                    
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-5">
                    <img src={props.image} alt="no img" className="img-fluid" />
                    </div>
                </div>
            </div>
    
            
        </>
    )
}

export default Componets
