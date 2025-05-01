import React, { useEffect, useState } from 'react'
import './Beauty.css'
import axios from 'axios';

const Beauty = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data); // Assuming response data is an array of products
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <div className="text-head">
        <p>Home / <span>Personal Care</span></p>
        <p><span>Personal Care</span> - 110499 items</p>
      </div>

      <div className="main-body">
        <div className="left">
          <div className="filter">
            <div className="filter-radio d-flex flex-column">
              <h5>FILTERS</h5>
              <hr />
              <label htmlFor="men">
                <input type="radio" value="filter" />
                Men
              </label>

              <label htmlFor="men">
                <input type="radio" value="filter" />
                Women
              </label>

              <label htmlFor="men">
                <input type="radio" value="filter" />
                Boys
              </label>

              <label htmlFor="men">
                <input type="radio" value="filter" />
                Girls
              </label>
            </div>
            <hr />

            <div className="filter-checkbox">
              <div className="head-checkox d-flex justify-content-between">
                <h5>Categories</h5>
                <i className="ri-search-line"></i>
              </div>
              <label>
                <input type="checkbox" /> Lipstick(13573)
              </label><br />
              <label>
                <input type="checkbox" /> Nail Polish(11100)
              </label><br />
              <label>
                <input type="checkbox" /> Perfume(4991)
              </label><br />
              <label>
                <input type="checkbox" /> Massage Oils(3520)
              </label><br />
              <label>
                <input type="checkbox" /> Face Wash(3114)
              </label><br />
              <label>
                <input type="checkbox" /> Bindi(2787)
              </label><br />
              <label>
                <input type="checkbox" /> Serum and Gel(2701)
              </label><br />
              <label>
                <input type="checkbox" /> Skin Care Combo(2562)
              </label><br />
              <h6 className="text-danger ms-4 mt-3">+173 more</h6>
            </div>
            <hr />

            <div className="filter-brand">
              <div className="head-checkox d-flex justify-content-between">
                <h5>Brand</h5>
                <i className="ri-search-line"></i>
              </div>
              <label>
                <input type="checkbox" /> Comet Busters(2729)
              </label><br />
              <label>
                <input type="checkbox" /> PERPAA(2598)
              </label><br />
              <label>
                <input type="checkbox" /> MI FASHION(2410)
              </label><br />
              <label>
                <input type="checkbox" /> NOY(2222)
              </label><br />
              <label>
                <input type="checkbox" /> Deve Herbes(1986)
              </label><br />
              <label>
                <input type="checkbox" /> ME-ON(1345)
              </label><br />
              <label>
                <input type="checkbox" /> BEROMT(1229)
              </label><br />
              <h6 className="text-danger ms-4 mt-3">+1878 more</h6>
            </div>
            <hr />

            <div className="filter-price">
              <h5>PRICE</h5>
              <div className="range mt-3">
                <div className="circle1"><i className="ri-circle-fill"></i></div>
                <div className="line"></div>
                <div className="circle1"><i className="ri-circle-fill"></i></div>
              </div>
              <p className="ms-3">₹0 - ₹10,000+</p>
            </div>
            <hr />

            <div className="filter-color d-flex flex-column">
              <div className="head-color d-flex justify-content-between">
                <h5>Color</h5>
                <i className="ri-search-line"></i>
              </div>
              <label>
                <input type="checkbox" />
                <i className="bi bi-circle-fill" style={{ color: "whitesmoke", padding: "5px" }}></i> White (13605)
              </label>
              <label>
                <input type="checkbox" />
                <i className="bi bi-circle-fill" style={{ color: "pink", padding: "5px" }}></i> Pink (10892)
              </label>
              <label>
                <input type="checkbox" />
                <i className="bi bi-circle-fill" style={{ color: "black", padding: "5px" }}></i> Black (9226)
              </label>
              <label>
                <input type="checkbox" />
                <i className="bi bi-circle-fill" style={{ color: "blue", padding: "5px" }}></i> Blue (9114)
              </label>
              <label>
                <input type="checkbox" />
                <i className="bi bi-circle-fill" style={{ color: "brown", padding: "5px" }}></i> Brown (7995)
              </label>
              <label>
                <input type="checkbox" />
                <i className="bi bi-circle-fill" style={{ color: "red", padding: "5px" }}></i> Red (6871)
              </label>
              <label>
                <input type="checkbox" />
                <i className="bi bi-circle-fill" style={{ color: "green", padding: "5px" }}></i> Green (6392)
              </label>
              <h6 className="text-danger ms-4 mt-3">+39 more</h6>
            </div>
            <hr />

            <div className="filter-discount d-flex flex-column">
              <h5>Discount Range</h5>
              <label>
                <input type="radio" value="filter" />
                10% and above
              </label>

              <label>
                <input type="radio" value="filter" />
                20% and above
              </label>

              <label>
                <input type="radio" value="filter" />
                30% and above
              </label>

              <label>
                <input type="radio" value="filter" />
                40% and above
              </label>

              <label htmlFor="men">
                <input type="radio" value="filter" />
                50% and above
              </label>

              <label>
                <input type="radio" value="filter" />
                60% and above
              </label>

              <label>
                <input type="radio" value="filter" />
                70% and above
              </label>

              <label>
                <input type="radio" value="filter" />
                80% and above
              </label>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-menu">
            <ul className="right-ul">
              <li className="right-li dropdown">
                Bundle <i className="ri-arrow-down-s-line"></i>
              </li>

              <li className="right-li">
                Country of origin <i className="ri-arrow-down-s-line"></i>
              </li>

              <li className="right-li">
                Size <i className="ri-arrow-down-s-line"></i>
              </li>
            </ul>

            <div className="sort-by-div">
              <p>Sort by: <span>Recommended</span></p>
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
          <div className="right-shop mt-5">
            <div className="product-list">
            <div className="container">
  <div className="row">
    {products.map((product) => (
      <div key={product.product_url} className="col-md-3 col-sm-6 mb-4">
        <div className="card shadow-sm border-light rounded h-100 overflow-hidden">
          <div className="position-relative">
            <img
              src={product.image_url || 'https://via.placeholder.com/150'}
              alt={product.title}
              className="card-img-top img-fluid"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="overlay">
              <a href={product.product_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">
              <strong>Rating:</strong> {product.rating} ({product.reviews} reviews)
            </p>
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text text-muted">{product.brand}</p>
            <p className="card-text">Sizes: {product.volume}</p>
            <p className="card-text">
              <strong>{product.price}</strong>
              <span className="text-muted ml-2"><del>{product.original_price}</del></span>
              <span className="badge bg-success ml-2">{product.discount}</span>
            </p>
          </div>
          <div className="card-footer text-center">
            <a href={product.product_url} className="btn btn-outline-primary w-100" target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};


export default Beauty;