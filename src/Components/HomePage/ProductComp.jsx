import React, { useContext } from "react";
import { Resize } from "../../context/Resize";
import {
  AuthContext,
  formatPrice,
  handleActualPrice,
} from "../../context/SetContext";
import { useDispatch } from "react-redux";
import { addToCart, minusCart, removeCart } from "../../ReduxReducers/Slice";

const ProductComp = ({
  item: { name, stock, image, quantity, price, discount, id },
}) => {
  const size = Resize();
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();

  const handleAddCart = (id) => {
    if (currentUser) {
      dispatch(addToCart(id));
    } else {
      alert("You have not Signed In.");
    }
  };

  const handleMinusCart = (id) => {
    if (currentUser) {
      dispatch(minusCart(id));
    } else {
      alert("You have not Signed In.");
    }
  };

  const handleRemoveCart = (id) => {
    if (currentUser) {
      dispatch(removeCart(id));
    } else {
      alert("You have not Signed In.");
    }
  };

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
          <button onClick={() => handleMinusCart(id)}>-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={() => handleAddCart(id)}>+</button>
        </div>
      </div>
      <button
        className={`btn addCartBtn ${quantity >= 1 ? "removeCartBtn" : ""}`}
        onClick={() =>
          quantity >= 1 ? handleRemoveCart(id) : handleAddCart(id)
        }
      >
        {quantity >= 1 ? "Remove from Cart" : "Add to Cart"}{" "}
      </button>
    </div>
  );
};

export default ProductComp;
