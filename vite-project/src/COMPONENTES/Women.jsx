import React from 'react'

const Women = () => {
  return (
   <>
    <div style={{ width: "90%", height: "auto", paddingTop: "80px", margin: "auto" }}>
        <img src="/IMAGES/men1.webp" className="d-block w-100" />
      </div>
      <div style={{ width: "90%", height: "auto", margin: "auto" }}>
        <img src="/IMAGES/women1.webp" className="d-block w-100" />
      </div>
      <div style={{ width: "90%", height: "auto", margin: "auto" }}>
        <img src="/IMAGES/women2.webp" className="d-block w-100" />
      </div>
      <div style={{ width: "90%", height: "auto", margin: "auto" }}>
        <img src="/IMAGES/men4.webp" className="d-block w-100" />
      </div>
      <div style={{ width: "90%", height: "auto", margin: "auto", display: "flex" }}>
        <div style={{ width: "50%" }}>
          <img
            src="/IMAGES/men5.webp"
            style={{ width: "100%" }}
          />

        </div>
        <div style={{ width: "50%" }}>
          <img
            src="/IMAGES/men6.webp"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div style={{ width: "90%", height: "auto", margin: "auto" }}>
        <img src="/IMAGES/men7.webp" className="d-block w-100" />
      </div>
      <div style={{ width: "90%", margin: "auto", marginTop: "20px" }}>
        <div
          id="carouselExampleDark2"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide group 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark2"
              data-bs-slide-to="1"
              aria-label="Slide group 2"
            ></button>
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="d-flex">
                <div className="flex-fill">
                  <img src="/IMAGES/women3.webp" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="flex-fill">
                  <img src="/IMAGES/women4.webp" className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="flex-fill">
                  <img src="/IMAGES/women5.webp" className="d-block w-100" alt="Slide 3" />
                </div>
                <div className="flex-fill">
                  <img src="/IMAGES/women6.webp" className="d-block w-100" alt="Slide 4" />
                </div>
                <div className="flex-fill">
                  <img src="/IMAGES/women7.webp" className="d-block w-100" alt="Slide 5" />
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="d-flex">
                <div className="flex-fill">
                  <img src="/IMAGES/women8.webp" className="d-block w-100" alt="Slide 6" />
                </div>
                <div className="flex-fill">
                  <img src="/IMAGES/women9.webp" className="d-block w-100" alt="Slide 7" />
                </div>
                <div className="flex-fill">
                  <img src="/IMAGES/women10.webp" className="d-block w-100" alt="Slide 8" />
                </div>
                <div className="flex-fill">
                  <img src="/IMAGES/women11.webp" className="d-block w-100" alt="Slide 9" />
                </div>
                <div className="flex-fill">
                  <img src="/IMAGES/women12.webp" className="d-block w-100" alt="Slide 10" />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div style={{ width: "90%", height: "auto", margin: "auto" }}>
        <img src="/IMAGES/men17.webp" className="d-block w-100" />
      </div>
      <div style={{ height: "auto", width: "90%", margin: "auto" }}>

        <div className="row g-0">
          <div className="col-6 col-md-2">
            <img src="/IMAGES/women13.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/women14.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/women15.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/women16.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/women17.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/women18.webp" className="d-block w-100" />
          </div>

        </div>
        <div className="row g-0">
          <div className="col-6 col-md-2">
            <img src="/IMAGES/women19.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/women20.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/women21.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/women22.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/women23.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/women25.webp" className="d-block w-100" />
          </div>

        </div>

      </div>
      <div style={{ width: "90%", height: "auto", margin: "auto" }}>
        <img src="/IMAGES/men30.webp" className="d-block w-100" />
      </div>


   </>
  )
}

export default Women