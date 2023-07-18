import React from "react";
import { Resize } from "../../context/Resize";
import { formatPrice, handleActualPrice } from "../../context/SetContext";
import { useDispatch } from "react-redux";
import { addToCart, minusCart, removeCart } from "../../ReduxReducers/Slice";

const ProductComp = ({
  item: { name, stock, image, quantity, price, discount, id },
}) => {
  const size = Resize();

  const dispatch = useDispatch();

  return (
    <div className="product">
      <img className="product--img" src={image} alt={name} loading="lazy" />
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
          <button onClick={() => dispatch(minusCart(id))}>-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={() => dispatch(addToCart(id))}>+</button>
        </div>
      </div>
      <button
        className={`btn addCartBtn ${quantity >= 1 ? "removeCartBtn" : ""}`}
        onClick={() =>
          quantity >= 1 ? dispatch(removeCart(id)) : dispatch(addToCart(id))
        }
      >
        {quantity >= 1 ? "Remove from Cart" : "Add to Cart"}{" "}
      </button>
    </div>
  );
};

export default ProductComp;
