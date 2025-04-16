import React from "react";
import { useParams, Link } from "react-router-dom"; 
import blogData from "../data/Blog"; 
import './BlogPostPage.css'; 

const BlogPostPage = () => {
  const { id } = useParams(); 
  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>; 
  }

  return (
    <div className="blog-fullpage">
      <div className="blog-banner">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog-body">
        <h1 className="blog-post-title">{post.title}</h1>
        <p className="blog-meta">
          {post.date} • By {post.author}
        </p>
        <div className="blog-content">
          <p>{post.content}</p>
        </div>
        <Link to="/Blogs" className="back-btn">← Back to Blog</Link>
      </div>
    </div>
  );
};

export default BlogPostPage;
