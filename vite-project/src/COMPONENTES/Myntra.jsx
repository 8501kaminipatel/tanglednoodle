import React from 'react'

const Myntra = () => {
  return (
    <>
    <div style={{width:"100%",height:"500px",marginTop:"80px"}}>
   


<div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="/public/IMAGES/img1.Webp"
            className="d-block w-100"
            alt="Slide 1"
          />
          
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
           src="/public/IMAGES/img3.jpg"
            className="d-block w-100"
            alt="Slide 2"
          />
          
        </div>
        <div className="carousel-item">
          <img
            src="/public/IMAGES/img4.jpg"
            className="d-block w-100"
            alt="Slide 3"
          />
         
        </div>
        <div className="carousel-item">
          <img
            src="/public/IMAGES/img5.jpg"
            className="d-block w-100"
            alt="Slide 4"
          />
         
        </div>
        <div className="carousel-item">
          <img
            src="/public/IMAGES/img2.jpg"
            className="d-block w-100"
            alt="Slide 5"
          />
         
        </div>
      </div>

   
    </div>
    
</div>
    </>

  )
}

export default Myntra