import React from "react";
import NACard from "../UI Components/Cards/NewArrival/NACard";
import Category from "../UI Components/Sections/CategorySection/Category";
import Products from "../UI Components/Sections/ProductsSection/Products";

import "./index.css";

function Home() {
  return (
    <div>
      <div className="home-bg">
        <img className="home-img" src="images/home-img.jpg" alt="" />
      </div>
      <div className="home-img-card">
        <NACard />
      </div>
      <Category />
      <Products />
    </div>
  );
}

export default Home;
