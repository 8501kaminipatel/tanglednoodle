import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";

// Helper function for API calls
const fetchCartData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/cart");
    return response.data;
  } catch (error) {
    toast.error("❌ Failed to fetch cart data");
    return [];
  }
};

const CartPage = () => {
  const [loading, setLoading] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [isFirstPayment, setIsFirstPayment] = useState(true);

  // Fetch cart data
  const cartData = useCallback(async () => {
    setLoading(true);
    const data = await fetchCartData();
    setCartItem(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    cartData();
  }, [cartData]);

  const updateCartItem = useCallback(async (id, updatedItem) => {
    try {
      await axios.put(`http://localhost:5000/cart/${id}`, updatedItem);
      setCartItem((prev) =>
        prev.map((item) => (item.id === id ? updatedItem : item))
      );
    } catch (error) {
      toast.error("❌ Failed to update item");
    }
  }, []);

  const increaseQuantity = (id) => {
    const item = cartItem.find((item) => item.id === id);
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    updateCartItem(id, updatedItem);
  };

  const decreaseQuantity = (id) => {
    const item = cartItem.find((item) => item.id === id);
    if (item.quantity === 1) {
      toast.warn("Minimum quantity is 1");
      return;
    }
    const updatedItem = { ...item, quantity: item.quantity - 1 };
    updateCartItem(id, updatedItem);
  };

  const handleCheckout = async () => {
    let totalAmount = parseFloat(getTotalPrice());
    const reward = localStorage.getItem("scratchReward");
  
    if (reward === "20% OFF" && isFirstPayment) {
      totalAmount = totalAmount - totalAmount * 0.20;
    }
  
    totalAmount = Math.round(totalAmount * 100);
  
    if (cartItem.length === 0) {
      toast.warn("Cart is empty. Add products to checkout.");
      return;
    }
  
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag",
      amount: totalAmount,
      currency: "INR",
      name: "ProductSite",
      description: "Test Payment",
      image: "https://your-site-logo.png",
      handler: async function (response) {
        toast.success("✅ Payment successful");
        localStorage.removeItem("scratchReward"); // Remove after use
        setIsFirstPayment(false); // Prevent future discount
  
        try {
          await clearCart();
          setCartItem([]);
        } catch (err) {
          toast.error("❌ Failed to clear cart.");
        }
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  
    rzp.on("payment.failed", function () {
      toast.error("❌ Payment failed. Try again.");
    });
  };
  
  
  // Helper function to clear the cart
  const clearCart = async () => {
    try {
      const deletePromises = cartItem.map((item) =>
        axios.delete(`http://localhost:5000/cart/${item.id}`)
      );
      await Promise.all(deletePromises);
    } catch (err) {
      throw new Error("Cart clearing failed");
    }
  };

  const getTotalPrice = () =>
    cartItem
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${id}`);
      setCartItem((prev) => prev.filter((item) => item.id !== id));
      toast.success("✅ Removed successfully!");
    } catch (error) {
      toast.error("❌ Failed to remove item.");
    }
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Cart</h1>

      {loading ? (
        <div>Loading...</div>
      ) : cartItem.length > 0 ? (
        <>
          {cartItem.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.product_name} className="cart-item-img" />
              <div className="cart-details">
                <div className="cart-header">
                  <h2>{item.product_name}</h2>
                  <button onClick={() => removeItem(item.id)} className="remove-btn">
                    Remove
                  </button>
                </div>
                <p className="cart-category">{item.category}</p>
                <p className="cart-size">Size: {item.volume || "Standard"}</p>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <div className="price-box">
                <p className="total-price">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="total-price">
            Total: <span className="total-price-value">${getTotalPrice()}</span>
          </div>

          <div className="checkout-section">
            <button onClick={handleCheckout} className="checkout-btn" disabled={cartItem.length === 0}>
              💳 Pay Now
            </button>
          </div>
        </>
      ) : (
        <div className="empty-cart">Cart is empty.</div>
      )}
    </div>
  );
};

export default CartPage;
