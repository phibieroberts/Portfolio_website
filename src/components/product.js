import React from "react";
import "./product.css";
function Product({ link, img }) {
  return (
    <div className="p">
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
