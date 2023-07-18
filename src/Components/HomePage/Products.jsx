import React, { useState, useEffect } from "react";
import ProductComp from "./ProductComp";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowDownUp } from "react-icons/bs";
import { sortCarProducts } from "../../ReduxReducers/Slice";

const Products = () => {
  let product = useSelector((data) => data.allFeatures.products);
  let loading = useSelector((data) => data.allFeatures.loading);
  const dispatch = useDispatch();

  // console.log(product);

  return (
    <div className="products--section">
      <h1 className="sectionHeading">Products</h1>
      <button
        className="filterButton"
        onClick={() => dispatch(sortCarProducts())}
      >
        {product.length > 2
          ? product[0].price > product[32].price
            ? "Filter By Low to High"
            : "Filter By High to Low"
          : "Filter Your Products"}
        <BsArrowDownUp style={{ marginLeft: "8px" }} />
      </button>
      {product.length > 0 ? (
        <div className="product--wrapper">
          {product.map((item, index) => (
            <ProductComp item={item} key={index} />
          ))}
        </div>
      ) : (
        <div className="notFound">No Product found by that name</div>
      )}
    </div>
  );
};

export default Products;
