import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ img, name, cate, description, slug }) => {
  let elDescroption = document.createElement("div");
  elDescroption.innerHTML = description;
  return (
    <Link to={`/blog/${slug}`}>
      <div className="c-blog">
        <div className="c-blog__img">
          <img src={img} alt={name} />
        </div>
        <div className="c-blog__txt">
          <span className="cate">{cate}</span>
          <p className="ttl">{name}</p>
          <p className="description">
            {elDescroption.innerText.length < 140
              ? elDescroption.innerText
              : `${elDescroption.innerText.substr(0, 140)} ...`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
