import React, { useState } from "react";
import ProductComp from "./ProductComp";
import ProductData from "../Data/ProductData.json";
import { useSelector } from "react-redux";

const Products = () => {
  const product = useSelector((data) => data.allFeatures.products);
  const product2 = useSelector((data) => data.allFeatures.cart);
  console.log(product2);

  return (
    <div className="products--section">
      <h1 className="sectionHeading">Products</h1>
      <div className="product--wrapper">
        {product.map((item, index) => (
          <ProductComp key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
