import React from "react";

const ProductComp = () => {
  return (
    <div className="product">
      <img src="./product-imgs/sweatshirt.png" alt="sweatshirt" />
      <h2 className="productName">Nike Sweatshirt Plain Maple Color</h2>
      <span>in Stock</span>
      <div className="productBtn">
        <span className="price">$150</span>
        <div className="quantityInfo">
          <button>-</button>
          <span className="quantity">0</span>
          <button>+</button>
        </div>
      </div>
      <button className="btn addCartBtn">Add to Cart </button>
    </div>
  );
};

export default ProductComp;
