import React from "react";

export const Blog = (props) => {
  return (
    <div id="blog" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Blog</h2>
          <p>Explore our latest updates, stories, and insights.</p>
        </div>
        <div className="row blog-container">
          {props.data ? (
            props.data.map((post, index) => (
              <div key={index} className="col-md-4 col-sm-6 blog-post">
                <div className="blog-card">
                  <img src={post.image} alt={post.title} className="blog-img" />
                  <div className="blog-content">
                    <h4>{post.title}</h4>
                    <p>{post.snippet}</p>
                    <a href={post.link} className="read-more">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading blog posts...</p>
          )}
        </div>
      </div>
    </div>
  );
};
