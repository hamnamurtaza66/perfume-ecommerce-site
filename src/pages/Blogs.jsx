import React from "react";
import { Link } from "react-router-dom";  
import './Blog.css';
import blogData from "../data/Blog"; 

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Our Latest Blog Posts</h1>
      <div className="blog-grid">
        {blogData.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-meta">
                {post.date} • By {post.author}
              </p>
              <Link to={`/post/${post.id}`}>
                <button className="read-more-btn">Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
