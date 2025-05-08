import React, { useEffect, useState } from 'react'

const Women = () => {

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
      {/* 
      <video width="600" controls>
    <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video> */}
    </>
  )
}

export default Women











// <form className="d-flex" onSubmit={handleSubmit}>
// {/* <i className="bi bi-search" style={{paddingLeft:"30px",paddingBottom:"5px"}} >

// </i> */}
// <input
//     type="search"
//     value={search}
//     placeholder="Search beauty products..."
//     onChange={(e) => setSearch(e.target.value)}
//     style={{ paddingLeft: "15px", color: "black" }}
// />

// <button onClick={handleVoiceSearch} disabled={isListening}>
//     {isListening ? "Listening..." : "🎤"}
// </button>
// {error && <p className="error">{error}</p>}
// </form>





    // const { user, handleSignOut, changeicon, flag } = useContext(Usercontext);
    // const [search, setSearch] = useState('');
    // const navigate = useNavigate();


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const trimmed = search.trim().toLowerCase();

    //     if (!trimmed) {
    //         navigate("/beauty"); // default page
    //         return;
    //     }

    //     if (["home"].some(keyword => trimmed.includes(keyword))) {
    //         navigate(`/product11?search=${encodeURIComponent(trimmed)}`);
    //     } else if (["women"].some(keyword => trimmed.includes(keyword))) {
    //         navigate(`/product?search=${encodeURIComponent(trimmed)}`);
    //     } else if (["men", "puma", "vastramay"].some(keyword => trimmed.includes(keyword))) {
    //         navigate(`/product2?search=${encodeURIComponent(trimmed)}`);
    //     } else if (["flip-flop"].some(keyword => trimmed.includes(keyword))) {
    //         navigate(`/product13?search=${encodeURIComponent(trimmed)}`);
    //     }
    //     else if (["sports shoes", "track pants", "tracksuits", "shorts"].some(keyword => trimmed.includes(keyword))) {
    //         navigate(`/product14?search=${encodeURIComponent(trimmed)}`);
    //     } else {
    //         navigate(`/beauty?search=${encodeURIComponent(trimmed)}`);
    //     }
    // };