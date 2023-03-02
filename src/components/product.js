import React, { useEffect } from "react";
import "./product.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Product({ link, img, repository }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="product" data-aos="zoom-in">
      <img src={img} alt="bookmark website" />
      <div className="overlay">
        <div className="content">
          <a href={link} target="_blank" rel="noreferrer">
            Visit Site
          </a>
          <a href={repository} target="_blank" rel="noreferrer">
            Visit Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
