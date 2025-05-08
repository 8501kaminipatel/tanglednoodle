import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartPage = () => {
  const [cartItem, setCartItem] = useState([]);

  const cartData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cart");
      setCartItem(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    cartData();
  }, []);

  const increaseQty = async (id) => {
    const item = cartItem.find((item) => item.id === id);
    const updatedQuantity = item.quantity + 1;

    try {
      await axios.patch(`http://localhost:5000/cart/${id}`, {
        quantity: updatedQuantity,
      });
      cartData();
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  const decreaseQty = async (id) => {
    const item = cartItem.find((item) => item.id === id);
    const updatedQuantity = item.quantity > 1 ? item.quantity - 1 : 1;

    try {
      await axios.patch(`http://localhost:5000/cart/${id}`, {
        quantity: updatedQuantity,
      });
      cartData();
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${id}`);
      setCartItem((prev) => prev.filter((item) => item.id !== id));
       toast.success("✅ REMOVE SUCCESSFULLY!");
    } catch (error) {
      console.log("Error removing item:", error);
      alert("Failed to remove item.");
       toast.error("❌ PRODUCT NOT REMOVE!!");
    }
  };

  const getTotalPrice = () =>
    cartItem.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Cart</h1>

      {cartItem.length > 0 ? (
        <>
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.product_name}
                className="cart-item-img"
              />
              <div className="cart-details">
                <div className="cart-header">
                  <h2>{item.product_name}</h2>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
                <p className="cart-category">{item.category}</p>
                <p className="cart-size">Size: {item.volume || "Standard"}</p>
                <p className="cart-rating">
                  <strong>Rating:</strong> {item.rating} ({item.rating_count} reviews)
                </p>
                <div className="quantity-controls">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="price-box">
                <p className="total-price">${(item.price * item.quantity).toFixed(2)}</p>
                <span className="unit-price">${item.price}</span>
              </div>
            </div>
          ))}

          <div className="total-price">
            Total: <span className="total-price-value">${getTotalPrice()}</span>
          </div>
        </>
      ) : (
        <div className="empty-cart">Cart is empty.</div>
      )}
    </div>
  );
};

export default CartPage;
