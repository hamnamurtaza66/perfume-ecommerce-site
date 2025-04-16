import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddToCart.css";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("localStorage cart before loading: ", localStorage.getItem("cart"));
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log("Loaded cart from localStorage:", cart);

    if (cart) {
      setCartItems(cart); 
    }
  }, []);
  useEffect(() => {
    if (cartItems.length > 0) {
      console.log("Saving cart to localStorage:", cartItems);
      localStorage.setItem("cart", JSON.stringify(cartItems)); 
    }
  }, [cartItems]);
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.newPrice * item.quantity, 0);
  };
  const handleDelete = (index) => {
    const updatedCartItems = cartItems.filter((_, itemIndex) => itemIndex !== index);
    setCartItems(updatedCartItems); 
  };
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>Size: {item.size}</p>
                  <p>Price: Rs. {item.newPrice}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button className="delete-btn" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: Rs. {getTotalAmount()}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCart;
