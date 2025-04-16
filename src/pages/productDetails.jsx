import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/productDetail";
import "./ProductDetail.css";
import { useCart } from "../components/CartContext"; 

const ProductDetail = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const product = products.find((p) => p.name === decodedName);

  const { addToCart } = useCart(); 

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    const newItem = {
      id: product.id || product.name, 
      name: product.name,
      image: product.images[0],
      newPrice: product.newPrice,
      quantity: 1,
      size: product.sizes[0], 
    };

    addToCart(newItem); 
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-detail">
      <div className="product-images">
        <img
          src={product.images[0]}
          alt={product.name}
          className="thumbnail"
        />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="description">{product.description}</p>
        <p><strong>Price:</strong> Rs. {product.newPrice}</p>
        <p><strong>Old Price:</strong> Rs. {product.oldPrice}</p>
        <div><strong>Sizes:</strong> {product.sizes?.join(", ")}</div>
        <div><strong>Reviews:</strong> {product.reviews}</div>
        <div><strong>Rating:</strong> ⭐ {product.rating}</div>

        {product.badges && (
          <div className="badges">
            {product.badges.map((badge, idx) => (
              <span key={idx} className="badge">{badge}</span>
            ))}
          </div>
        )}

        {product.testers && (
          <div><strong>Testers:</strong> {product.testers.join(", ")}</div>
        )}

        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
