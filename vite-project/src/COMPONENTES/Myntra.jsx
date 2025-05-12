import React from 'react'
import "./Myntra.css"
import ScratchCard from './ScratchCard'

const Myntra = () => {
  return (
    <>
<ScratchCard />
<div className="container-fluid px-2">

{/* Hero Carousel */}
<div id="carouselExampleDark" className="carousel slide carousel-dark mb-4" data-bs-ride="carousel">
  <div className="carousel-indicators">
    {[...Array(5)].map((_, i) => (
      <button
        key={i}
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to={i}
        className={i === 0 ? "active" : ""}
        aria-current={i === 0 ? "true" : undefined}
        aria-label={`Slide ${i + 1}`}
      />
    ))}
  </div>
  <div className="carousel-inner rounded" style={{width:"100%"}}>
    {["img5.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img2.jpg"].map((img, idx) => (
      <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
        <img src={`/IMAGES/${img}`} className="d-block w-100 img-fluid" alt={`Slide ${idx + 1}`} />
      </div>
    ))}
  </div>
</div>

{/* Rising Stars Section */}
<h2 className="fw-bold mb-3">RISING STARS</h2>
<div id="carouselExampleDark2" className="carousel slide carousel-dark mb-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    {[...Array(3)].map((_, i) => (
      <button
        key={i}
        type="button"
        data-bs-target="#carouselExampleDark2"
        data-bs-slide-to={i}
        className={i === 0 ? "active" : ""}
        aria-current={i === 0 ? "true" : undefined}
        aria-label={`Group ${i + 1}`}
      />
    ))}
  </div>
  <div className="carousel-inner">
    {[["img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg"],
      ["img10.jpg", "img11.jpg", "img12.jpg", "img13.jpg"],
      ["img14.jpg", "img15.jpg", "img16.jpg", "img17.jpg"]
    ].map((group, i) => (
      <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
        <div className="row">
          {group.map((img, j) => (
            <div key={j} className="col-6 col-sm-4 col-md-3 mb-2">
              <img src={`/IMAGES/${img}`} className="img-fluid rounded w-100" alt={`Item ${j + 1}`} />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

{/* Luxe Deals */}
<h2 className="fw-bold mb-3">LUXE GRAND REDUCTION DEALS</h2>
<div id="carouselExampleDark3" className="carousel slide carousel-dark mb-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    {[0, 1].map((i) => (
      <button
        key={i}
        type="button"
        data-bs-target="#carouselExampleDark3"
        data-bs-slide-to={i}
        className={i === 0 ? "active" : ""}
        aria-current={i === 0 ? "true" : undefined}
        aria-label={`Group ${i + 1}`}
      />
    ))}
  </div>
  <div className="carousel-inner">
    {[["img21.webp", "img22.webp", "img23.webp", "img24.webp", "img30.webp", "img49.webp"],
      ["img29.webp", "img26.webp", "img27.webp", "img28.webp", "img31.webp", "img50.webp"]
    ].map((group, i) => (
      <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
        <div className="row">
          {group.map((img, j) => (
            <div key={j} className="col-6 col-sm-4 col-md-2 mb-2">
              <img src={`/IMAGES/${img}`} className="img-fluid rounded w-100" alt={`Luxe ${j + 1}`} />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

{/* Shop by Category */}
<h2 className="fw-bold sm-6 mb-4">Shop By Category</h2>
<div className="image-grid-wrapper">
  {[
    'img32.webp', 'img33.webp', 'img34.webp', 'img35.webp', 'img36.webp', 'img37.webp',
    'img38.webp', 'img39.webp', 'img40.webp', 'img41.webp', 'img42.webp', 'img43.webp',
    'img44.webp', 'img45.webp', 'img46.webp', 'img47.webp', 'img48.webp'
  ].map((img, i) => (
    <div key={i} className="grid-item">
      <img src={`/IMAGES/${img}`} className="img-fluid rounded w-100" alt={`Category ${i + 1}`} />
    </div>
  ))}
</div>

</div>



    </>

  )
}

export default Myntra