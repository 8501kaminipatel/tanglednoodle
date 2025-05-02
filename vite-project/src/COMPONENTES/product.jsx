import React, { useEffect, useState } from 'react';

const ProductPage = () => {
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

  if (loading) return <h2 style={{ padding: '20px' }}>Loading...</h2>;
  if (!studioData) return <h2 style={{ padding: '20px' }}>No Data Found</h2>;

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
    <div style={styles.grid}>
      {images.map((url, i) => (
        <img key={i} src={url} alt={`img-${i}`} style={styles.image} />
      ))}
    </div>
  );

  const renderBrandSection = (title, data) => {
    if (!data) return null;
    const products = data.products || data.product_images || [];

    return (
      <>
      <section style={styles.section}>
        <div style={styles.brandHeader}>
          {data.brand_logo && (
            <img src={data.brand_logo} alt={`${title} logo`} style={styles.brandLogo} />
          )}
          <h2>{title}</h2>
        </div>

        {data.banner && (
          <img src={data.banner} alt={`${title} banner`} style={styles.banner} />
        )}

        {data.description && <p style={styles.description}>{data.description}</p>}

        {data.videoUrl && (
        <iframe
          style={styles.video}
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

        <div style={styles.productGrid}>
          {products.map((item, idx) => {
            const img = typeof item === 'string' ? item : item.image;
            const price = item.price || data.price;
            const original = item.original_price || '';
            const discount = item.discount || data.discount;

            return (
              <>
              <div key={idx} style={styles.card}>
                <img src={img} alt="product" style={styles.cardImg} />
                {price && <p>Price: ₹{price}</p>}
                {original && <p style={styles.original}>Original: ₹{original}</p>}
                {discount && <p style={styles.discount}>{discount}</p>}
              </div>
              
              </>
            );
          })}
        </div>
      </section>
      
      </>
    );
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={styles.logo}>STUDIO</div>
        <ul style={styles.navList}>
          <li><a href="#looks" style={styles.navLink}>Looks</a></li>
          <li><a href="#influencers" style={styles.navLink}>Influencers</a></li>
          <li><a href="#brands" style={styles.navLink}>Brands</a></li>
        </ul>
      </nav>



      {/* <div style={styles.hero}>
        <img src="/images/studio-hero.jpg" alt="Studio Hero" style={styles.heroImg} />
      </div> */}

      <section id="looks" style={styles.section}>
        <h2>Guide To Influencers’ Most Coveted Looks</h2>
        {renderImages(GuideToInfluencersMostCovetedLooks)}
      </section>

      <section id="influencers" style={styles.section}>
        <h2>Follow Our Top Influencers</h2>
        {renderImages(FollowOurTopInfluencers)}
      </section>

      <section id="brands">
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

const styles = {
  container: {
    marginTop: "100px",
    fontFamily: "'Poppins', sans-serif",
    maxWidth: '500px',
    margin: 'auto',
    padding: '0 20px',
    background: '#f9f9f9',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#ffffff',
    padding: '18px 24px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid #eee',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  },
  logo: {
    fontSize: '26px',
    fontWeight: '700',
    color: '#ff3f6c',
    letterSpacing: '1px'
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    margin: 0,
    padding: 0
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  },
  hero: {
    margin: '40px 0'
  },
  heroImg: {
    width: '100%',
    maxHeight: '500px',
    objectFit: 'cover',
    borderRadius: '14px',
  },
  section: {
    marginTop: '60px',
    paddingBottom: '40px'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '20px'
  },
  image: {
    width: '30%',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  },
  brandHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px'
  },
  brandLogo: {
    width: '60px',
    height: 'auto'
  },
  banner: {
    width: '100%',
    maxHeight: '320px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '24px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
  },
  video: {
    width: '100%',
    borderRadius: '10px',
    margin: '24px 0',
    border: 'none',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
  },
  description: {
    marginBottom: '20px',
    fontSize: '16px',
    color: '#555'
  },
  productGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '30px'
  },
  card: {
    width: '220px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    padding: '16px',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  },
  cardImg: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '12px'
  },
  original: {
    textDecoration: 'line-through',
    color: '#999',
    fontSize: '14px',
    marginTop: '4px'
  },
  discount: {
    color: '#28a745',
    fontWeight: '600',
    fontSize: '14px',
    marginTop: '4px'
  }
}

export default ProductPage;
