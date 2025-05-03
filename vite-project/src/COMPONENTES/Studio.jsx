import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Studio = () => {
  const [studioData, setStudioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/studio')
      .then(res => res.json())
      .then(data => {
        setStudioData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch studio data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="loading-text">Loading...</h2>;
  if (!studioData) return <h2 className="loading-text">No Data Found</h2>;

  const {
    GuideToInfluencersMostCovetedLooks,
    FollowOurTopInfluencers,
    BinnisWardrobe,
    Technosport,
    Kasee,
    brand,
    brand1,
    brand3,
  } = studioData;

  const renderImages = (images) => (
    <div className="product-grid">
      {images.map((url, i) => (
        <img key={i} src={url} alt={`img-${i}`} className="product-img" />
      ))}
    </div>
  );

  const renderBrandSection = (title, data) => {
    if (!data) return null;
    const products = data.products || data.product_images || [];

    return (
      <>
        <section className="brand-section">
          <div className="brand-header">
            {data.brand_logo && (
              <img src={data.brand_logo} alt={`${title} logo`} className="brand-logo" style={{height:"auto",width:"auto",paddingLeft:"20px",marginTop:"10px"}}/>
            )}
            <h2>{title}</h2>
          </div>

          {data.banner && (
            <img src={data.banner} alt={`${title} banner`} className="brand-banner" />
          )}

          {data.description && <p className="brand-description">{data.description}</p>}

          {data.videoUrl && (
            <iframe
              className="brand-video"
              width="100%"
              height="315"
              src={data.videoUrl}
              title={`${title} video`}
              frameBorder="0"
              allow="autoplay"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}

          <div className="product-card-grid">
            {products.map((item, idx) => {
              const img = typeof item === 'string' ? item : item.image;
              const price = item.price || data.price;
              const original = item.original_price || '';
              const discount = item.discount || data.discount;

              return (
                <div key={idx} className="product-card">
                  <img src={img} alt="product" className="product-card-img" />
                  {price && <p>Price: ₹{price}</p>}
                  {original && <p className="product-original">Original: ₹{original}</p>}
                  {discount && <p className="product-discount">{discount}</p>}
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="product-container" style={{marginTop:"80px",border:"1px solid black"}}>
      <nav className="product-nav" >
        <div className="product-logo"><Link to="/"><i class="bi bi-arrow-left-circle-fill" style={{paddingRight:"8px",  color: "#ff3f6c"}}></i></Link>STUDIO</div>
        <ul className="product-nav-list">
          <li><a href="#looks" className="product-nav-link">Looks</a></li>
          <li><a href="#influencers" className="product-nav-link">Influencers</a></li>
          <li><a href="#brands" className="product-nav-link">Brands</a></li>
        </ul>
      </nav>

      <section id="looks" className="product-section" style={{marginTop:"0px"}}>
        <h3 style={{paddingLeft:"30px",marginTop:"10px",color:"black"}}>Guide To Influencers’ Most Coveted Looks</h3>
        {renderImages(GuideToInfluencersMostCovetedLooks)}
      </section>

      <section id="influencers" className="product-section">
        <h2 style={{paddingLeft:"30px",marginTop:"10px",color:"black"}}>Follow Our Top Influencers</h2>
        {renderImages(FollowOurTopInfluencers)}
      </section>

      <section id="brands"  style={{color:"black"}}>
        {renderBrandSection("Binni's Wardrobe", BinnisWardrobe)}
        {renderBrandSection("Technosport", Technosport)}
        {renderBrandSection("Kasee", Kasee)}
        {renderBrandSection(brand?.brand_name || 'Brand', brand)}
        {renderBrandSection(brand1?.brand_name || 'Brand', brand1)}
        {renderBrandSection(brand3?.brand_name || 'Brand', brand3)}
      </section>
    </div>
    
  );
};

export default Studio