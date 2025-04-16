import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner-section">
        <div className="banner-text">
          <h1>Welcome to Our Perfume Website</h1>
          <p>Explore a variety of luxury perfumes for all occasions.</p>
          <Link to="/contact">  <button className="shop-now-btn">Contact us</button></Link>
        </div>
        <div className="banner-image">
          <img src="/images/home10.png" alt="Perfume Collection" className="hero-image" />
        </div>
      </div>

      <div className="new-arrivals">
        <h2>BEST SELLER PERFUMES</h2>
        <div className="products-container">
          <div className="product-card">
            <img src="/images/product4.jpg" alt="Perfume" />
            <div className="product-info">
              <div>⭐⭐⭐⭐⭐ 88 reviews</div>
              <h4>Cuban Cocktail</h4>
              <p>Limited Edition</p>
              <div className="ml-options">
                <button>50ml</button>
                <button>100ml</button>
              </div>
              <p className="price">
                <span style={{ textDecoration: "line-through", color: "red" }}>Rs. 2,499</span> Rs. 1,890
              </p>
            </div>
          </div>

          <div className="product-card">
            <img src="/images/product 3.jpg" alt="The Queen" />
            <div className="product-info">
              <div>⭐⭐⭐⭐⭐ 90 reviews</div>
              <h4>THE QUEEN</h4>
              <p>Victoria Secret Bombshell</p>
              <div className="ml-options">
                <button>50ml</button>
                <button>15ml</button>
                <button>100ml</button>
              </div>
              <p className="price">
                <span style={{ textDecoration: "line-through", color: "red" }}>Rs. 2,290</span> Rs. 1,890
              </p>
            </div>
          </div>

          <div className="product-card">
            <img src="/images/product 2.jpg" alt="The Harmony" />
            <div className="product-info">
              <div>⭐⭐⭐⭐⭐ 850 reviews</div>
              <h4>THE HARMONY</h4>
              <p>Inspired By Sauvage Dior</p>
              <div className="ml-options">
                <button>50ml</button>
                <button>15ml</button>
                <button>100ml</button>
              </div>
              <p className="price">
                <span style={{ textDecoration: "line-through", color: "red" }}>Rs. 2,390</span> Rs. 2,090
              </p>
            </div>
          </div>

          <div className="product-card">
            <img src="/images/product 1.png" alt="Rose Vault" />
            <div className="product-info">
              <div>⭐⭐⭐⭐⭐ 562 reviews</div>
              <h4>ROSE VAULT</h4>
              <p>Inspired By Gucci Flora</p>
              <div className="ml-options">
                <button>50ml</button>
                <button>15ml</button>
                <button>100ml</button>
              </div>
              <p className="price">
                <span style={{ textDecoration: "line-through", color: "red" }}>Rs. 2,290</span> Rs. 1,890
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-section">
        <h2>Why Choose Us?</h2>
        <div className="cards-container">
          <div className="card">
            <i className="fas fa-gift icon"></i>
            <p>Free fragrance box, spray tester & gift bags</p>
          </div>
          <div className="card">
            <i className="fas fa-undo icon"></i>
            <p>Easy return and exchange</p>
          </div>
          <div className="card">
            <i className="fas fa-comments icon"></i>
            <p>Dedicated human representative to assist you</p>
          </div>
          <div className="card">
            <i className="fas fa-thumbs-up icon"></i>
            <p>300,000 happy customers</p>
          </div>
          <div className="card">
            <i className="fas fa-star icon"></i>
            <p>25,000+ 5 star reviews</p>
          </div>
        </div>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Scentique, our mission is to make luxury fragrances accessible and affordable to everyone.
          We’re passionate about helping you express your unique personality through the perfect scent, whether
          it’s for a casual day out, a romantic evening, or a professional setting.
        </p>
      </div>
    </div>
  );
};

export default Home;
