import React from 'react';

const GENZ = () => {
  return (
    <>
      <div className="container-fluid mt-2">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {[...Array(6)].map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={i}
                className={i === 0 ? 'active' : ''}
                aria-current={i === 0 ? 'true' : undefined}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {['gez2.webp', 'gez1.webp', 'gez3.webp', 'gez4.webp', 'gez5.webp', 'gez6.webp'].map((img, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval="3000">
                <img src={`/IMAGES/${img}`} className="d-block w-100 img-fluid" alt={`Slide ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-12 col-md-6 mb-2">
            <img src="/IMAGES/gez7.webp" className="img-fluid w-100" alt="Gez7" />
          </div>
          <div className="col-12 col-md-6 mb-2">
            <img src="/IMAGES/gez8.webp" className="img-fluid w-100" alt="Gez8" />
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <h2 className="text-uppercase ps-3">Biggest Deals On Top Drips</h2>
        <div className="row g-3 mt-3 px-3">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <img src={`/IMAGES/gez${i + 9}.webp`} className="img-fluid w-100" alt={`Image ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GENZ;
