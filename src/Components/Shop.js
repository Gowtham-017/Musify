import React, { useState } from "react";
import Categories from "./Categories";
import ProductsList from "./ProductsList";
// import "./Shop.css";

const Shop = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="Container">
      <div className="categories">
        <Categories setCategory={setCategory} />
      </div>
      <div className="products">
        <ProductsList category={category} />
      </div>
    </div>
  );
};

export default Shop;