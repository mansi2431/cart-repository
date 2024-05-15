import React, { useState } from "react";
import "./index.css";

function Products() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const products = [
    {
      img: "p1.webp",
      title: "Dining",
      description: "Stylish cafe chair",
      price: "2.500",
      mrp: "3.500",
    },

    {
      img: "p2.webp",
      title: "Grifo",
      description: "Luxury big sofa",
      price: "7.500",
      mrp: "5.600",
    },

    {
      img: "p3.webp",
      title: "Muggo",
      description: "Elegant dining table",
      price: "1.500",
    },

    {
      img: "p4.webp",
      title: "Pingky",
      description: "Comfy armchair",
      price: "800",
      mrp: "680",
    },

    {
      img: "p5.webp",
      title: "Muggo",
      description: "Elegant dining table",
      price: "1500",
    },

    {
      img: "p6.webp",
      title: "Vimora",
      description: "Vintage coffee table",
      price: "950",
      mrp: "760",
    },

    {
      img: "p7.webp",
      title: "Zephyr",
      description: "Modern TV stand",
      price: "350",
    },

    {
      img: "p2.webp",
      title: "Sydney",
      description: "Sleek office desk",
      price: "450",
      mrp: "382",
    },
  ];
  return (
    <div className="product-section">
      <div className="heading-container">
        <h2>Our Products</h2>
      </div>
      <div className="product-card-container">
        {products.map((item, index) => {
          return (
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="product-card"
              key={index}
            >
              <img src={`images/${item.img}`} alt="" />
              <div className="product-card-body">
                <p className="product-title">{item.title}</p>
                <p className="product-description">{item.description} </p>
                <div className="product-price-container">
                  <p className="product-price">Rp {item.price},00</p>
                  {item.mrp && <p className="product-mrp">Rp {item.mrp},00</p>}
                </div>
              </div>
              {hoveredIndex === index && (
                <button className="hover-button">Add to Cart</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
