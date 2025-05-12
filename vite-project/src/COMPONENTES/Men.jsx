import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Men = () => {
  const [timeLeft, setTimeLeft] = useState(5000);


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [])


  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return (
    <>


      <div
        className="glass-box text-danger d-flex justify-content-center align-items-center fs-5"
        style={{ width: 'fit-content', padding: '10px 20px', borderRadius: '12px', margin: 'auto' }}
      >
        Sale Ends In {String(hours).padStart(2, '0')} H : {String(minutes).padStart(2, '0')} M : {String(seconds).padStart(2, '0')} S
      </div>


      <div style={{ width: "90%", height: "auto", paddingTop: "10px", margin: "auto" }}>
        <img src="/IMAGES/men1.webp" className="d-block w-100" />
      </div>
      <div style={{ width: "90%", height: "auto", margin: "auto" }}>
        <Link to="/product">
          <img src="/IMAGES/men2.webp" className="d-block w-100" />
        </Link>
      </div>
      <div style={{ width: "90%", height: "auto", margin: "auto" }}>
        <img src="/IMAGES/men3.gif" className="d-block w-100" />
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
                  <Link to="/product1">
                    <img src="/IMAGES/men8.webp" className="d-block w-100" alt="Slide 1" />
                  </Link>
                </div>
                <div className="flex-fill">
                  <Link to="/product3">
                    <img src="/IMAGES/men13.webp" className="d-block w-100" alt="Slide 2" />
                  </Link>
                </div>
                <div className="flex-fill">
                  <Link to="/product4">
                    <img src="/IMAGES/men10.webp" className="d-block w-100" alt="Slide 3" />
                  </Link>
                </div>
                <div className="flex-fill">
                  <Link to="/product5">
                    <img src="/IMAGES/men11.webp" className="d-block w-100" alt="Slide 4" />
                  </Link>
                </div>
                <div className="flex-fill">
                  <Link to="/product2">
                    <img src="/IMAGES/men16.webp" className="d-block w-100" alt="Slide 5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="d-flex">
                <div className="flex-fill">
                  <Link to="/product3">
                    <img src="/IMAGES/men12.webp" className="d-block w-100" alt="Slide 6" />
                  </Link>
                </div>
                <div className="flex-fill">
                  <img src="/IMAGES/men9.webp" className="d-block w-100" alt="Slide 7" />
                </div>
                <div className="flex-fill">
                  <Link to="/product5">
                    <img src="/IMAGES/men14.webp" className="d-block w-100" alt="Slide 8" />
                  </Link>
                </div>
                <div className="flex-fill">
                  <img src="/IMAGES/men15.webp" className="d-block w-100" alt="Slide 9" />
                </div>
                <div className="flex-fill">
                  <Link to="/product4">
                    <img src="/IMAGES/men10.webp" className="d-block w-100" alt="Slide 10" />
                  </Link>
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
            <Link to="/product5">
              <img src="/IMAGES/men18.webp" className="d-block w-100" />
            </Link>
          </div>
          <div className="col-6 col-md-2">
            <Link to="/product6">
              <img src="/IMAGES/men19.webp" className="d-block w-100" />
            </Link>
          </div>
          <div className="col-6 col-md-2">
            <Link to="/product7">
              <img src="/IMAGES/men20.webp" className="d-block w-100" />
            </Link>
          </div>
          <div className="col-6 col-md-2">
            <Link to="/product8">
              <img src="/IMAGES/men21.webp" className="d-block w-100" />
            </Link>
          </div>
          <div className="col-6 col-md-2">
            <Link to="/product9">
              <img src="/IMAGES/men22.webp" className="d-block w-100" />
            </Link>
          </div>
          <div className="col-6 col-md-2">
            <Link to="/product10">
              <img src="/IMAGES/men23.webp" className="d-block w-100" />
            </Link>
          </div>

        </div>
        <div className="row g-0">
          <div className="col-6 col-md-2 ">
            <img src="/IMAGES/men24.webp" className="d-block w-100" />
          </div>
          <div className="col-6 col-md-2">
            <Link to="/product11">
              <img src="/IMAGES/men25.webp" className="d-block w-100" />
            </Link>
          </div>
          <div className="col-6 col-md-2">
            <Link to="/product12">
              <img src="/IMAGES/men26.webp" className="d-block w-100" />
            </Link>
          </div>
          <div className="col-6 col-md-2">
            <Link to="/product13">
              <img src="/IMAGES/men27.webp" className="d-block w-100" />
            </Link>
          </div>
          <div className="col-6 col-md-2">
            <Link to="/product14">
              <img src="/IMAGES/men28.webp" className="d-block w-100" />
            </Link>
          </div>
          <div className="col-6 col-md-2">
            <img src="/IMAGES/men29.webp" className="d-block w-100" />
          </div>

        </div>

      </div>
      <div style={{ width: "90%", height: "auto", margin: "auto" }}>
        <img src="/IMAGES/men30.webp" className="d-block w-100" />
      </div>



    </>
  )
}

export default Men