import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from "react-toastify";

const Description = () => {
    const [singleData, setSingleData] = useState({});
    const [singlData, setSinglData] = useState({});
    const [selectedSize, setSelectedSize] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const [descriptiondata, setdescriptiondata] = useState([]);



    const getSingleData = async () => {
        const endpoints = [
            `http://localhost:5000/products/${id}`,
            `http://localhost:5000/description/${id}`,
            `http://localhost:5000/men1/${id}`,
            `http://localhost:5000/men2/${id}`,
            `http://localhost:5000/men3/${id}`,
            `http://localhost:5000/men4/${id}`,
            `http://localhost:5000/men5/${id}`,
            `http://localhost:5000/men7/${id}`,
            `http://localhost:5000/men6/${id}`,
            `http://localhost:5000/men8/${id}`,
            `http://localhost:5000/men9/${id}`,
             `http://localhost:5000/men10/${id}`,
                `http://localhost:5000/men11/${id}`
        ];

        for (let i = 0; i < endpoints.length; i++) {
            try {
                const res = await fetch(endpoints[i]);
                if (!res.ok) throw new Error(`Not found at endpoint ${endpoints[i]}`);
                const data = await res.json();
                console.log(`Data from ${endpoints[i]}:`, data);
                setSingleData(data);
                return;
            } catch (err) {
                console.log(`Error fetching from ${endpoints[i]}:`, err);
            }
        }

        // If all fail
        setError("Failed to load product details.");
    };



    const getdata = () => {
        console.log('Fetching description data...');
        axios.get('http://localhost:5000/description')
            .then((response) => {
                console.log('Description Data:', response.data); // Check the response data
                setdescriptiondata(response.data);
            })
            .catch((error) => {
                console.log('Error fetching description data:', error);
            });
    };


    useEffect(() => {
        getSingleData();
        getdata();
    }, [id]);  // Add singleData as a dependency



    const addToCart = async (product) => {
        try {
            const res = await axios.post('http://localhost:5000/cart', {
                productId: product.id,
                title: product.title,
                price: Number(product.discounted_price.replace("Rs. ", "")),
                image: product.image_url, // using image_url here
                quantity: 1,
                rating: product.rating,
                rating_count: product.rating_count,
                category: product.brand,
                volume: product.volume,
                original_price: Number(product.original_price.replace("Rs. ", "")),
                discount: product.discount,
            });
            navigate("/cart")
            toast.success("✅ Product added to cart!");
        } catch (error) {
            console.error("Error adding to cart:", error);
            toast.error("❌ Failed to add to cart.");
        }
    };






    return (
        <>
            <div className="description-wrapper py-1" style={{ background: 'linear-gradient(135deg,rgb(60, 60, 62),rgb(229, 229, 235))' }}>
                <div className="container my-5">
                    <div className="row justify-content-center align-items-start glassmorphic-row">
                        {/* Left: Image Gallery */}
                        <div className="col-md-5 mb-4">
                            <motion.div
                                className="main-image-glass p-2"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                    src={singleData.image_url}
                                    alt={singleData.title}
                                    className="img-fluid main-img"
                                    style={{ height: "500px" }}
                                />
                            </motion.div>

                            {/* Animated Thumbnails */}
                            <div className="d-flex gap-2 mt-3">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <motion.img
                                        key={i}
                                        src={singleData.image_url || 'https://via.placeholder.com/100'}
                                        alt={`thumb${i + 1}`}
                                        className="img-thumbnail thumb-img mx-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.15 }}
                                        whileHover={{ scale: 1.1, rotate: 2 }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right: Product Details with Glassmorphism */}
                        <div className="col-md-5 product-card-glass text-white" style={{ height: "500px" }}>
                            <h3>{singleData.title}</h3>
                            <p className="text-light">{singleData.brand}</p>
                            <p className="text-light"><i class="bi bi-person-bounding-box" style={{ color: "#3498db" }}></i> {singleData.rating_count}</p>
                            <p className="mb-2">
                                <strong className="text-success">{singleData.discounted_price}</strong>
                                <span className="text-light ms-2"><del>{singleData.original_price}</del></span>
                                <span className="badge bg-success ms-2">{singleData.discount}</span>

                            </p>
                            {/* Star Ratings */}
                            <div className="d-flex align-items-center mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <i
                                        key={star}
                                        className={`bi ${star <= Math.round(singleData.rating) ? 'bi-star-fill' : 'bi-star'} text-warning me-1`}
                                        style={{ fontSize: '1.2rem' }}
                                    />
                                ))}
                                <span className="ms-2 text-light">{singleData.rating} / 5</span>

                            </div>


                            {/* Sizes */}
                            <div className="mb-3">
                                <strong>Select Size:</strong>
                                <div className="d-flex gap-2 mt-2 flex-wrap">
                                    {singleData.volume?.split('/')?.map((size, index) => (
                                        <button
                                            key={index}
                                            className={`btn btn-sm ${selectedSize === size ? 'btn-light text-dark' : 'btn-outline-light'}`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-4">
                                <h5>Product Details</h5>
                                <p>{singleData.description}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="d-grid gap-2 mt-4">

                                <button className="btn btn-danger" style={{ width: "100%" }} onClick={() => addToCart(singleData)}>Add to Bag</button>

                                <button className="btn btn-outline-light">Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-list" style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="row">
                        {descriptiondata.map((product) => (
                            <div key={product.id} className="col-md-3 col-sm-6 mb-4">
                                <div className="card shadow-sm border-light rounded h-100 overflow-hidden">
                                    <div className="position-relative">
                                        <img
                                            src={product.image_url || 'https://via.placeholder.com/150'}
                                            alt={product.title}
                                            className="card-img-top img-fluid"
                                            style={{ height: '250px', objectFit: 'cover' }}
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
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text text-muted">{product.brand}</p>
                                        <p className="card-text">Sizes: {product.volume}</p>
                                        <p className="card-text">
                                            <span className="text-muted me-2">
                                                <span className="line-through text-red-500 mr-2">₹{product.original_price}</span>
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
        </>
    );
};

export default Description;
