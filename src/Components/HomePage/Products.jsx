import React from "react";
import ProductComp from "./ProductComp";

const Products = () => {
  return (
    <div className="products--section">
      <h1 className="sectionHeading">Products</h1>
      <div className="product--wrapper">
        <ProductComp />
        <ProductComp />
      </div>
    </div>
  );
};

export default Products;
