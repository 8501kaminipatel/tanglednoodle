import React, { useEffect, useState } from 'react';
import './Beauty.css';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Product13 = () => {
  const location = useLocation(); // To track the location (URL)
  const [products, setProducts] = useState([]);
  const [ascproduct, setascproduct] = useState(null); // To track sorting
  const queryParams = new URLSearchParams(location.search); // Get query params
  const search = queryParams.get('search') || ''; // Default to empty if no search param
  const [searchParams, setSearchParams] = useSearchParams(); // To manage search parameters in URL
  const [discountFilters, setDiscountFilters] = useState(
    searchParams.get("discount") ? [searchParams.get("discount")] : []
  );
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedProductNames, setSelectedProductNames] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [categorydata, setcategorydata] = useState(searchParams.getAll("category") || []);
  console.log(categorydata)

  const handlechange = (e) => {
    const { value } = e.target;
    let updated = [...categorydata];

    if (updated.includes(value)) {
      updated = updated.filter(item => item !== value);
    } else {
      updated.push(value);
    }

    setcategorydata(updated);
  };


  const handleColorChange = (e) => {
    const { value } = e.target;
    setSelectedColors((prev) => prev.includes(value) ? prev.filter(color => color !== value) : [...prev, value]);
  };

  const handleProductNameChange = (e) => {
    const { value } = e.target;
    setSelectedProductNames((prev) =>
      prev.includes(value) ? prev.filter((name) => name !== value) : [...prev, value]
    );
  };

  const handleBrandChange = (e) => {
    const { value, checked } = e.target;
    setSelectedBrands((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter(brand => brand !== value);
      }
    });
  };

  const handleDiscountChange = (e) => {
    const { value } = e.target;
    setDiscountFilters([value]);

    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("discount", value);
      return newParams;
    });
  };

  const getDiscountPercentage = (discount = '') =>
    parseInt(discount.match(/\d+/)?.[0] || 0, 10);

  const parmobj = {
    q: search,
    _sort: "discounted_price",
    _order: ascproduct,
    category: searchParams.getAll("category"),

  };


  const getdata = () => {
    axios
      .get(' http://localhost:5000/men14', { params: parmobj })
      .then(response => {
        setProducts(response.data);
        let filteredProducts = response.data;

        // Filter products by selected discount
        if (discountFilters.length > 0) {
          filteredProducts = filteredProducts.filter((product) => {
            const productDiscount = getDiscountPercentage(product.discount);
            return discountFilters.some((filter) => {
              const filterValue = parseInt(filter, 10);
              return productDiscount >= filterValue;
            });
          });
        }
        if (selectedProductNames.length > 0) {
          filteredProducts = filteredProducts.filter(product =>
            selectedProductNames.some(name =>
              product.product_name.toLowerCase().includes(name.toLowerCase())
            )
          );
        }
        if (selectedBrands.length > 0) {
          filteredProducts = filteredProducts.filter(product =>
            selectedBrands.includes(product.brand)
          );
        }

        // Color filter
        if (selectedColors.length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            selectedColors.includes(product.color?.toLowerCase())
          );
        }
        setProducts(filteredProducts);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  // Use useEffect to fetch products when location/search or other parameters change
  useEffect(() => {
    getdata(parmobj);
    setSearchParams({ category: categorydata })
  }, [location.search, ascproduct, searchParams, discountFilters, categorydata, selectedProductNames, selectedBrands, selectedColors]);


  return (
    <>
      <div className="text-head" style={{ marginTop: "5px" }}>
        <p>Home / <span>Personal Care</span></p>
        <p><span>Personal Care</span> - 110499 items</p>
      </div>

      <div className="main-body p-4">
        <div className="sidebar">
          <div className="filter">
            <div className="filter-radio d-flex flex-column">
              <h5>FILTERS</h5>
              <hr />
              <label htmlFor="men">
                <input type="checkbox" value="flip-flops" checked={categorydata.includes("flip-flops")} onChange={handlechange} />
                flip-flops
              </label>

              <label htmlFor="men">
                <input type="checkbox" value="women" checked={categorydata.includes("women")} onChange={handlechange} />
                Women
              </label>

              <label htmlFor="men">
                <input type="checkbox" value="Boys" checked={categorydata.includes("Boys")} onChange={handlechange} />
                Boys
              </label>

              <label htmlFor="men">
                <input type="checkbox" value="Girls" checked={categorydata.includes("Girls")} onChange={handlechange} />
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
                <input type="checkbox" value="Men Slip-On"
                  checked={selectedProductNames.includes("Men Slip-On")}
                  onChange={handleProductNameChange} /> Men Slip-On
              </label><br />

              <label>
                <input type="checkbox" value="Women Grape Adjustable Slider"
                  checked={selectedProductNames.includes("Women Grape Adjustable Slider")}
                  onChange={handleProductNameChange} /> Women Grape Adjustable Slider
              </label><br />

              <label>
                <input type="checkbox" value="Unisex Printed Sliders"
                  checked={selectedProductNames.includes("Unisex Printed Sliders")}
                  onChange={handleProductNameChange} /> Unisex Printed Sliders
              </label><br />

              <label>
                <input type="checkbox" value="Men Casual Sliders"
                  checked={selectedProductNames.includes("Men Casual Sliders")}
                  onChange={handleProductNameChange} /> Men Casual Sliders
              </label><br />

              <label>
                <input type="checkbox" value="Unisex Fabric Sliders"
                  checked={selectedProductNames.includes("Unisex Fabric Sliders")}
                  onChange={handleProductNameChange} /> Unisex Fabric Sliders
              </label><br />

              <label>
                <input type="checkbox" value="Unisex Popcat 20 Sliders"
                  checked={selectedProductNames.includes("Unisex Popcat 20 Sliders")}
                  onChange={handleProductNameChange} /> Unisex Popcat 20 Sliders
              </label><br />

              <label>
                <input type="checkbox" value="Women Printed Sliders"
                  checked={selectedProductNames.includes("Women Printed Sliders")}
                  onChange={handleProductNameChange} /> Women Printed Sliders
              </label><br />

              <label>
                <input type="checkbox" value="Textured Clogs"
                  checked={selectedProductNames.includes("Textured Clogs")}
                  onChange={handleProductNameChange} /> Textured Clogs
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
                <input type="checkbox" value="DOCTOR HEALTH SUPER SOFT"
                  checked={selectedBrands.includes("DOCTOR HEALTH SUPER SOFT")}
                  onChange={handleBrandChange} /> DOCTOR HEALTH SUPER SOFT
              </label><br />

              <label>
                <input type="checkbox" value="yoho"
                  checked={selectedBrands.includes("yoho")}
                  onChange={handleBrandChange} /> yoho
              </label><br />

              <label>
                <input type="checkbox" value="HRX by Hrithik Roshan"
                  checked={selectedBrands.includes("HRX by Hrithik Roshan")}
                  onChange={handleBrandChange} /> HRX by Hrithik Roshan
              </label><br />

              <label>
                <input type="checkbox" value="Roadster"
                  checked={selectedBrands.includes("Roadster")}
                  onChange={handleBrandChange} /> Roadster
              </label><br />

              <label>
                <input type="checkbox" value="NEEMANS"
                  checked={selectedBrands.includes("NEEMANS")}
                  onChange={handleBrandChange} /> NEEMANS
              </label><br />

              <label>
                <input type="checkbox" value="Puma"
                  checked={selectedBrands.includes("Puma")}
                  onChange={handleBrandChange} /> Puma
              </label><br />

              <label>
                <input type="checkbox" value="DOCTOR EXTRA SOFT"
                  checked={selectedBrands.includes("DOCTOR EXTRA SOFT")}
                  onChange={handleBrandChange} /> DOCTOR EXTRA SOFT
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
                <input type="checkbox" value="white"
                  checked={selectedColors.includes("white")}
                  onChange={handleColorChange} />
                <i className="bi bi-circle-fill" style={{ color: "whitesmoke", padding: "5px" }}></i> White (13605)
              </label>
              <label>
                <input type="checkbox" value="gray"
                  checked={selectedColors.includes("gray")}
                  onChange={handleColorChange} />
                <i className="bi bi-circle-fill" style={{ color: "Gray", padding: "5px" }}></i> Gray (10892)
              </label>
              <label>
                <input
                  type="checkbox"
                  value="multi"
                  checked={selectedColors.includes("multi")}
                  onChange={handleColorChange}
                />
                <i
                  className="bi bi-circle-fill"
                  style={{
                    background: "linear-gradient(to right, rgb(227,109,178), rgb(255,255,0), rgb(255,0,0))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    padding: "5px"
                  }}
                ></i>{" "}
                Multi (9226)
              </label>
              <label>
                <input type="checkbox" value="black"
                  checked={selectedColors.includes("black")}
                  onChange={handleColorChange} />
                <i className="bi bi-circle-fill" style={{ color: "black", padding: "5px" }}></i> Black (9226)
              </label>
              <label>
                <input type="checkbox" value="brown"
                  checked={selectedColors.includes("brown")}
                  onChange={handleColorChange} />
                <i className="bi bi-circle-fill" style={{ color: "brown", padding: "5px" }}></i> Brown (7995)
              </label>
              <label>
                <input type="checkbox" value="golden"
                  checked={selectedColors.includes("golden")}
                  onChange={handleColorChange} />
                <i className="bi bi-circle-fill" style={{ color: "yellow", padding: "5px" }}></i> golden(6871)
              </label>
              <label>
                <input type="checkbox" value="green"
                  checked={selectedColors.includes("green")}
                  onChange={handleColorChange} />
                <i className="bi bi-circle-fill" style={{ color: "#008000", padding: "5px" }}></i> Green (6392)
              </label>
              <h6 className="text-danger ms-4 mt-3">+39 more</h6>
            </div>
            <hr />

            <div className="filter-discount d-flex flex-column">
              <h5>Discount Range</h5>
              <label>
                <input type="radio" value="10%" name="discount"
                  checked={discountFilters.includes("10%")}
                  onChange={handleDiscountChange} />
                10% and above
              </label>

              <label>
                <input type="radio" value="20%" name="discount"
                  checked={discountFilters.includes("20%")}
                  onChange={handleDiscountChange} />
                20% and above
              </label>

              <label>
                <input type="radio" value="30%" name="discount"
                  checked={discountFilters.includes("30%")}
                  onChange={handleDiscountChange} />
                30% and above
              </label>

              <label>
                <input type="radio" value="40%" name="discount"
                  checked={discountFilters.includes("40%")}
                  onChange={handleDiscountChange} />
                40% and above
              </label>

              <label htmlFor="men">
                <input type="radio" value="50%" name="discount"
                  checked={discountFilters.includes("50%")}
                  onChange={handleDiscountChange} />
                50% and above
              </label>

              <label>
                <input type="radio" value="60%" name="discount"
                  checked={discountFilters.includes("60%")}
                  onChange={handleDiscountChange} />
                60% and above
              </label>

              <label>
                <input type="radio" value="70%" name="discount"
                  checked={discountFilters.includes("70%")}
                  onChange={handleDiscountChange} />
                70% and above
              </label>

              <label>
                <input type="radio" value="80%" name="discount"
                  checked={discountFilters.includes("80%")}
                  onChange={handleDiscountChange} />
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
              <select onChange={(e) => setascproduct(e.target.value)}>
                <option value="">Sort by: <span>Recommended</span> <i className="ri-arrow-down-s-line"></i></option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
          </div>


          <div className="right-shop mt-5" >
            <div className="product-list">
              <div className="container">
                <div className="row">
                  {products.map((product) => (
                    <div key={product.id} className="col-md-3 col-sm-6 mb-4" style={{ height: "630px", width: "220px" }}>
                      <div className="card shadow-sm border-light rounded h-100 overflow-hidden">
                        <div className="position-relative" >

                          <img
                            src={product.image_url}
                            alt={product.title}
                            className="card-img-top img-fluid"

                          />
                          <div className="overlay">
                            <div className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                              <Link to={`/description/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                Buy Now
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <p className="card-text">
                            <strong>Rating:</strong> {product.rating} ({product.rating_count} reviews)
                          </p>
                          <h5 className="card-title" style={{ fontStyle: "10px" }}>{product.product_name}</h5>
                          <p className="card-text text-muted">{product.brand}</p>
                          <p className="card-text">Sizes: {product.volume}</p>
                          <p className="card-text">
                            <span className="text-muted me-2">
                              <span className="text-decoration-line-through text-danger me-2">₹{product.original_price}</span>
                            </span>
                            <span className="fw-bold me-2 text-dark">₹{product.discounted_price}</span>
                            <span className="badge bg-success">{product.discount}</span>
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
      </div >
    </>
  );
};

export default Product13;
