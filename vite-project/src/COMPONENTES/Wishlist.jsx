import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/wishlist")
            .then((res) => setWishlist(res.data))
            .catch((err) => console.error(err));
    }, []);

    const removeFromWishlist = async (id) => {
        await axios.delete(`http://localhost:5000/wishlist/${id}`);
        setWishlist((prev) => prev.filter(item => item.id !== id));
    };

    const handleShare = (product) => {
        const shareUrl = `${window.location.origin}/description/${product.id}`;

        if (navigator.share) {
            navigator.share({
                title: product.title,
                text: "Check out this product!",
                url: shareUrl,
            }).catch((err) => console.error("Share failed:", err));
        } else {
            navigator.clipboard.writeText(shareUrl)
                .then(() => alert("🔗 Link copied to clipboard!"))
                .catch((err) => console.error("Failed to copy link:", err));
        }
    };

    return (
        <div className="container mt-5">
            <h2>Your Wishlist</h2>
            <div className="row">
                {wishlist.map((product) => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card h-100">
                            <img src={product.image_url} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.product_name}</h5>
                                <p className="card-text text-muted">{product.brand}</p>
                                <p className="card-text">Sizes: {product.volume}</p>
                                <p>{product.discounted_price}</p>
                                <Link to={`/description/${product.id}`} className="btn btn-primary btn-sm">View</Link>
                                <button className="btn btn-danger btn-sm ms-2" onClick={() => removeFromWishlist(product.id)}>Remove</button>
                                {/* Share button for each product */}
                                <button
                                    className="btn btn-outline-secondary btn-sm ms-2"
                                    onClick={() => handleShare(product)}
                                >
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
