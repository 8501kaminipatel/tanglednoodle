import React from 'react'

const Myntra = () => {
  return (
    <>

      <div style={{ width: "100%", height: "430px", marginTop: "30px" }}>



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
                src="/IMAGES/img3.jpg"
                className="d-block w-100"
                alt="Slide 2"
              />

            </div>
            <div className="carousel-item">
              <img
                src="/IMAGES/img4.jpg"
                className="d-block w-100"
                alt="Slide 3"
              />

            </div>
            <div className="carousel-item">
              <img
                src="/IMAGES/img5.jpg"
                className="d-block w-100"
                alt="Slide 4"
              />

            </div>
            <div className="carousel-item">
              <img
                src="/IMAGES/img2.jpg"
                className="d-block w-100"
                alt="Slide 5"
              />

            </div>
          </div>


        </div>

      </div>

      <h2 style={{ fontWeight: "bolder", margin: "30px" }}>RISING STARS</h2>
      <div style={{ width: "100%", height: "530px", marginTop: "80px" }}>



        <div style={{ width: "100%", height: "500px", marginTop: "80px" }}>
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
              <button
                type="button"
                data-bs-target="#carouselExampleDark2"
                data-bs-slide-to="2"
                aria-label="Slide group 3"
              ></button>
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="row g-0">
                  <div className="col-6 col-md-3">
                    <img src="/IMAGES/img6.jpg" className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="/IMAGES/img7.jpg" className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="/IMAGES/img8.jpg" className="d-block w-100" alt="Slide 3" />
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="/IMAGES/img9.jpg" className="d-block w-100" alt="Slide 4" />
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row g-0">
                  <div className="col-6 col-md-3">
                    <img src="/IMAGES/img10.jpg" className="d-block w-100" alt="Slide 5" />
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="/IMAGES/img11.jpg" className="d-block w-100" alt="Slide 6" />
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="/IMAGES/img12.jpg" className="d-block w-100" alt="Slide 7" />
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="/IMAGES/img13.jpg" className="d-block w-100" alt="Slide 8" />
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="row g-0">
                  <div className="col-6 col-md-3">
                    <img src="/IMAGES/img14.jpg" className="d-block w-100" alt="Slide 9" />
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="/IMAGES/img15.jpg" className="d-block w-100" alt="Slide 10" />
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="/IMAGES/img16.jpg" className="d-block w-100" alt="Slide 11" />
                  </div>
                  <div className="col-6 col-md-3">
                    <img src="/IMAGES/img17.jpg" className="d-block w-100" alt="Slide 12" />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>

      <h2 style={{ fontWeight: "bolder", margin: "30px" }}>LUXE GRAND REDUCTION DEALS</h2>
      <div style={{ width: "100%", height: "350px", marginTop: "80px" }}>



        <div style={{ width: "100%", height: "500px", marginTop: "80px" }}>
          <div
            id="carouselExampleDark3"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark3"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide group 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark3"
                data-bs-slide-to="1"
                aria-label="Slide group 2"
              ></button>

            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="row g-0">
                  <div className="col-6 col-md-2">
                    <img src="/IMAGES/img21.webp" className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="col-6 col-md-2">
                    <img src="/IMAGES/img22.webp" className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="col-6 col-md-2">
                    <img src="/IMAGES/img23.webp" className="d-block w-100" alt="Slide 3" />
                  </div>
                  <div className="col-6 col-md-2">
                    <img src="/IMAGES/img24.webp" className="d-block w-100" alt="Slide 4" />
                  </div>
                  <div className="col-6 col-md-2">
                    <img src="/IMAGES/img30.webp" className="d-block w-100" alt="Slide 5" />
                  </div>
                  <div className="col-6 col-md-2">
                    <img src="/IMAGES/img49.webp" className="d-block w-100" alt="Slide 6" />
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row g-0">
                  <div className="col-6 col-md-2">
                    <img src="/IMAGES/img29.webp" className="d-block w-100" alt="Slide 7" />
                  </div>
                  <div className="col-6 col-md-2">
                    <img src="/IMAGES/img26.webp" className="d-block w-100" alt="Slide 8" />
                  </div>
                  <div className="col-6 col-md-2">
                    <img src="/IMAGES/img27.webp" className="d-block w-100" alt="Slide 9" />
                  </div>
                  <div className="col-6 col-md-2">
                    <img src="/IMAGES/img28.webp" className="d-block w-100" alt="Slide 10" />
                  </div>
                  <div className="col-6 col-md-2">
                    <img src="/IMAGES/img31.webp" className="d-block w-100" alt="Slide 11" />
                  </div>
                  <div className="col-6 col-md-2">
                    <img src="/IMAGES/img50.webp" className="d-block w-100" alt="Slide 12" />
                  </div>
                </div>
              </div>


            </div>


          </div>
        </div>

      </div>

      <h2 style={{ fontWeight: "bolder", margin: "30px" }}>Shop By Category</h2>
      <div style={{height:"800px"}}>

        <div className="row g-0">
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img32.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img33.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img34.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img35.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img36.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img37.webp" className="d-block w-100" />
          </div>

        </div>
        <div className="row g-0">
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img38.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img39.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img40.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img41.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img42.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img43.webp" className="d-block w-100" />
          </div>

        </div>
        <div className="row g-0">
          <div className="col-6 col-md-3">
            <img src="/IMAGES/img44.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img45.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img46.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/img47.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-3">
            <img src="/IMAGES/img48.webp" className="d-block w-100" />
          </div>

        </div>
      </div>

      


    </>

  )
}

export default Myntra