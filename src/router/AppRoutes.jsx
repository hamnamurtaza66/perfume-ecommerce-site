import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import ProductDetail from "../pages/productDetails"; 
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/Login";
import SignUp from "../components/Signup";
import Blogs from "../pages/Blogs";
import BlogPostPage from "../pages/BlogPostPage";
import AddToCart from "../components/AddToCart";
import Checkout from '../pages/CheckOut'; 
import { CartProvider } from "../components/CartContext"; 

const AppRoutes = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/product/:name" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/post/:id" element={<BlogPostPage />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default AppRoutes;
