import React from "react";
import { Link } from "react-router-dom"; 
import "./women.css";
import products from "../data/productDetail";

const Women = () => {
  const womenProducts = products.filter((product) => product.category === "women");

  return (
    <div className="women-container">
      <h2 className="women-heading">Best Selling Women's Perfumes</h2>
      <div className="product-grid">
        {womenProducts.map((product, index) => (
          <Link
            to={`/product/${encodeURIComponent(product.name)}`} 
            key={index}
            className="product-card-link"
          >
            <div className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <div className="product-reviews">⭐⭐⭐⭐⭐ {product.reviews} reviews</div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div className="ml-options">
                  {product.sizes.map((size, idx) => (
                    <button key={idx}>{size}</button>
                  ))}
                </div>
                <p className="product-price">
                  <span className="old-price">Rs. {product.oldPrice}</span> Rs. {product.newPrice}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Women;
