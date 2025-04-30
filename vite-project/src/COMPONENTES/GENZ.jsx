import React from 'react'

const GENZ = () => {
  return (
   <>
   <div style={{ width: "100%", height: "430px", marginTop: "80px" }}>



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
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to="5"
      aria-label="Slide 6"
    ></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img
        src="/public/IMAGES/gez2.Webp"
        className="d-block w-100"
        alt="Slide 1"
      />

    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img
        src="/IMAGES/gez1.webp"
        className="d-block w-100"
        alt="Slide 2"
      />

    </div>
    <div className="carousel-item">
      <img
        src="/IMAGES/gez3.webp"
        className="d-block w-100"
        alt="Slide 3"
      />

    </div>
    <div className="carousel-item">
      <img
        src="/IMAGES/gez4.webp"
        className="d-block w-100"
        alt="Slide 4"
      />

    </div>
    <div className="carousel-item">
      <img
        src="/IMAGES/gez5.webp"
        className="d-block w-100"
        alt="Slide 5"
      />

    </div>
    <div className="carousel-item">
      <img
        src="/IMAGES/gez6.webp"
        className="d-block w-100"
        alt="Slide 6"
      />

    </div>
  </div>


</div>

</div>
<div style={{ width: "100%", height: "200px", marginTop: "10px",display:"flex" }}>
   <div style={{width:"50%"}}>
   <img
        src="/public/IMAGES/gez7.Webp"
        style={{width:"100%"}}
      />

   </div>
   <div style={{width:"50%"}}>
   <img
        src="/public/IMAGES/gez8.Webp"
        style={{width:"100%"}}
      />
   </div>
</div>

<h2 style={{marginLeft:"50px",textTransform:"uppercase"}}>Biggest Deals On Top Drips</h2>

<div style={{ height: "750px", padding: "0 60px" ,marginTop:"40px"}}>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "16px",
    }}
  >
    <img src="/IMAGES/gez9.webp" className="w-100" alt="Image 1" />
    <img src="/IMAGES/gez10.webp" className="w-100" alt="Image 2" />
    <img src="/IMAGES/gez11.webp" className="w-100" alt="Image 3" />
    <img src="/IMAGES/gez12.webp" className="w-100" alt="Image 4" />
    <img src="/IMAGES/gez13.webp" className="w-100" alt="Image 5" />
    <img src="/IMAGES/gez14.webp" className="w-100" alt="Image 6" />
    <img src="/IMAGES/gez15.webp" className="w-100" alt="Image 7" />
    <img src="/IMAGES/gez16.webp" className="w-100" alt="Image 8" />
    <img src="/IMAGES/gez17.webp" className="w-100" alt="Image 9" />
    <img src="/IMAGES/gez18.webp" className="w-100" alt="Image 10" />
  </div>
</div>

       
    

   </>
  )
}

export default GENZ