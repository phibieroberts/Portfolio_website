import React, { useEffect } from "react";
import "./product.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Product({ link, img }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="product" data-aos="zoom-in">
      <div className="browser">
        <div className="circle red"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="bookmark website" className="p-img" />
      </a>
    </div>
  );
}

export default Product;
