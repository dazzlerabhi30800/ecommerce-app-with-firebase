import React, { useState, useEffect } from "react";
import ProductComp from "./ProductComp";
import { useDispatch, useSelector } from "react-redux";
import {
  sortCartAscending,
  sortCartDescending,
} from "../../ReduxReducers/Slice";

const Products = () => {
  let product = useSelector((data) => data.allFeatures.products);
  const dispatch = useDispatch();

  // console.log(productSplice);

  return (
    <div className="products--section">
      <h1 className="sectionHeading">Products</h1>
      <div className="filterButtons">
        <button
          onClick={() => dispatch(sortCartAscending())}
          className="btn sortBtn"
        >
          Low to High
        </button>
        <button
          onClick={() => dispatch(sortCartDescending())}
          className="btn sortBtn"
        >
          Hight to Low
        </button>
      </div>
      <div className="product--wrapper">
        {product.map((item, index) => (
          <ProductComp item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
