import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);  // State to hold the product data
  const [loading, setLoading] = useState(true);  // State to handle loading state
  const [error, setError] = useState(null);  // State to handle errors if any

  useEffect(() => {
    // Fetching data from the json-server API
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);  // Setting the products state
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch(err => {
        setError(err.message);  // Handling errors
        setLoading(false);  // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>;  // Show error message if any error occurs
  }

  return (
    <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <a href={product.productBaseHref}>
          <img src={product.imgResponsiveSrc} alt={product.productName} className="product-img" />
        </a>
        <div className="product-details">
          <h3 className="product-brand">{product.productBrand}</h3>
          <p className="product-name">{product.productName}</p>
          <p className="product-size">Size: {product.productSize}</p>
          <p className="product-inventory">Price: {product.productInventory}</p>
          <p className="product-present">Present Price: {product.productPresent}</p>
          <p className="product-discount">Discounted Price: {product.productDiscountedPrice}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default ProductList;
