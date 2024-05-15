import React from "react";
import "./index.css";

function Category() {
  return (
    <div className="category-section">
      <div className="heading-container">
        <h2>Browse the Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="category-card-container">
        <div className="category-card">
          <img src="images/dining.webp" alt="" />
          <p className="category-card-title">Dining</p>
        </div>

        <div className="category-card">
          <img src="images/living.webp" alt="" />
          <p className="category-card-title">Living</p>
        </div>

        <div className="category-card">
          <img src="images/bedroom.webp" alt="" />
          <p className="category-card-title">Bedroom</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
