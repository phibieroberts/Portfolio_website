import React, { useEffect } from "react";
import "./productList.css";
import { FaArrowRight } from "react-icons/fa";

import Product from "./product";
import { products } from "./data";
import Aos from "aos";
import "aos/dist/aos.css";

function ProductList() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="project">
      <h1 data-aos="zoom-out">Create & inspire. it's Phoebe</h1>
      <p>
        Phoebe is a creative portfolio that your work has been waiting for
        beautiful touch, stunning designs and creative portfolio styles and a
        lot more
      </p>
      <div className="project-list">
        {products.map((item) => (
          <Product key={item.id} link={item.link} img={item.img} />
        ))}
      </div>
      <div className="view-more">
        <a href="https://github.com/phibieroberts">
          {" "}
          View more on Github <FaArrowRight className="right" />
        </a>
      </div>
    </section>
  );
}

export default ProductList;
