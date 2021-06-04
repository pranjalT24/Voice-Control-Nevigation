import React from 'react'

function Card(props) {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-12">
                   <div className="card" >
  <img src={props.serviceImg} class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div> 
        </>
    )
}

export default Card
