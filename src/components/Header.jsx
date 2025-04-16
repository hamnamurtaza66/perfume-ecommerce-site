import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext"; 

const Header = () => {
  const { getCartCount } = useCart();  
  const cartCount = getCartCount();    

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src="/images/Perfume 1.png" alt="Perfume Logo" className="logo" />
        <h1 className="store-name">Scentique</h1>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/Men" className="nav-link">Men</Link>
        <Link to="/Women" className="nav-link">Women</Link>
        <Link to="/Blogs" className="nav-link">Blogs</Link>
      </nav>
      <div className="actions">
        <Link to="/cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
