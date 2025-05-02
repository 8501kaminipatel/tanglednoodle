import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Description = () => {
    const [singleData, setSingleData] = useState({});
    const [selectedSize, setSelectedSize] = useState('');
    const { id } = useParams();

    const getSingleData = () => {
        fetch(`http://localhost:5000/products/${id}`)
            .then((res) => res.json())
            .then((data) => setSingleData(data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getSingleData();
    }, []);

    return (
        <div className="description-wrapper py-5" style={{ background: 'linear-gradient(135deg,rgb(60, 60, 62),rgb(229, 229, 235))' }}>
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
                        <p className="text-light"><i class="bi bi-person-bounding-box" style={{ color: "#3498db"}}></i> {singleData.rating_count}</p>
                        <p className="mb-2">
                            <strong className="text-success">{singleData.price}</strong>
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
                            <button className="btn btn-danger">Add to Bag</button>
                            <button className="btn btn-outline-light">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Description;
