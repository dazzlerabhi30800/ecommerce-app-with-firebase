import React from "react";
import { Resize } from "../../context/Resize";
import { formatPrice } from "../../context/SetContext";

const ProductComp = ({
  item: { name, stock, image, quantity, price, discount },
}) => {
  const size = Resize();
  const handleActualPrice = (price, discount) => {
    return Math.floor((price * 100) / (100 - discount));
  };

  return (
    <div className="product">
      <img src={image} alt={name} loading="lazy" />
      <h2 className="productName">{name}</h2>
      <div
        style={{
          display: "flex",
          padding: "0 15px",
          gap: "1rem",
          alignItems: "center",
          textAlign: "center",
          justifyContent: size < 600 && "center",
        }}
      >
        <span>in Stock</span>
        <span>{discount}%</span>
        <span
          style={{
            fontWeight: "600",
            fontSize: "0.9rem",
            textDecoration: "line-through",
          }}
          className="actualPrice"
        >
          ₹{formatPrice(handleActualPrice(price, discount))}
        </span>
      </div>
      <div className="productBtn">
        <span className="price">₹{formatPrice(price)}</span>
        <div className="quantityInfo">
          <button>-</button>
          <span className="quantity">{quantity}</span>
          <button>+</button>
        </div>
      </div>
      <button className="btn addCartBtn">Add to Cart </button>
    </div>
  );
};

export default ProductComp;
