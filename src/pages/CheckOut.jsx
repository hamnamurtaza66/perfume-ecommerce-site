import React, { useEffect, useState } from 'react';
import './CheckOut.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const savedData = localStorage.getItem('checkoutForm');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }

    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('checkoutForm', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const total = cartItems.reduce((acc, item) => acc + item.newPrice * item.quantity, 0);
  const discount = total * 0.1;
  const grandTotal = total - discount;

  const handleCheckout = () => {
    alert('Order placed!');
    localStorage.removeItem('checkoutForm');
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>Contact & Delivery Info</h2>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </form>

        <div className="payment-methods">
          <h3>Payment Methods</h3>
          <div className="payment-icons">
            <img src="/images/visa.png" alt="Visa" />
            <img src="/images/card.png" alt="MasterCard" />
            <img src="/images/cash-on-delivery.png" alt="Cash on Delivery" />
          </div>
        </div>
      </div>

      <div className="checkout-summary">
        <h2>Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index} className="order-summary-item">
                <span>{item.name} x{item.quantity}</span>
                <span>Rs {item.newPrice * item.quantity}</span>
              </div>
            ))}
            <div className="order-summary-item">
              <span>Subtotal</span>
              <span>Rs {total}</span>
            </div>
            <div className="order-summary-item discount">
              <span>Discount (10%)</span>
              <span>- Rs {discount.toFixed(0)}</span>
            </div>
            <div className="order-summary-item order-summary-total">
              <span>Total</span>
              <span>PKR Rs {grandTotal.toFixed(0)}</span>
            </div>
            <button className="place-order-btn" onClick={handleCheckout}>
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
