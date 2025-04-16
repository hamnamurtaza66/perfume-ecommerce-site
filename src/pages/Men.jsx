import React from "react";
import { Link } from "react-router-dom";
import "./Men.css";
import products from "../data/products";

const Men = () => {
  const menPerfumes = products.filter((product) => product.category === "men");

  return (
    <div className="men-container">
      <h1 className="men-title">Men's Perfume Collection</h1>
      <div className="men-products">
        {menPerfumes.map((product, index) => (
          <Link
            to={`/product/${encodeURIComponent(product.name)}`}
            key={index}
            className="men-card-link"
          >
            <div className="men-card">
              <img src={product.image} alt={product.name} className="men-img" />
              <div className="men-info">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div className="ml-options">
                  {product.sizes.map((size, i) => (
                    <button key={i}>{size}</button>
                  ))}
                </div>
                <p className="price">
                  <span className="old-price">Rs. {product.oldPrice}</span> Rs. {product.newPrice}
                </p>
                <div className="stars">⭐⭐⭐⭐⭐ {product.reviews} reviews</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Men;
