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
      <div className="project-text">
        <h1 data-aos="zoom-out">Create & inspire. it's Phoebe</h1>
        <p>
          Over the years I have dedicated my time to learning and improving my
          skills as a front End developer and i have used tools like Chakra Ui,
          SPLIDEJS, stripe, Bootsrap e.t.c Here are some of the project I've
          worked on using HTML,CSS,JavaScript, ReactJs
        </p>
      </div>
      <div className="project-list">
        {products.map((item) => (
          <Product
            key={item.id}
            link={item.link}
            img={item.img}
            repository={item.repository}
          />
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
