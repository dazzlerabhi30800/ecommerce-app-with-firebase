import React, { useState } from "react";
import ProductComp from "./ProductComp";
import ProductData from "../Data/ProductData.json";

const Products = () => {
  const [products, setProducts] = useState(ProductData.products);
  return (
    <div className="products--section">
      <h1 className="sectionHeading">Products</h1>
      <div className="product--wrapper">
        {products.map((item, index) => (
          <ProductComp key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
