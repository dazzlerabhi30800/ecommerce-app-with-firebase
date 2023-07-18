import { LuTrash } from "react-icons/lu";
import { formatPrice, handleActualPrice } from "../../context/SetContext";
import { useDispatch } from "react-redux";
import {
  minusCart,
  addToCart,
  removeCart,
  animateRemoveItem,
} from "../../ReduxReducers/Slice";

const CartItemComp = ({
  item: { discount, id, image, name, price, quantity, isAnimate },
}) => {
  const dispatch = useDispatch();

  const handleAnim = (id) => {
    dispatch(animateRemoveItem(id));
    setTimeout(() => {
      dispatch(removeCart(id));
      dispatch(animateRemoveItem(id));
    }, 1500);
  };
  return (
    <div className={`cartItem ${isAnimate ? "removeItemAnim" : ""}`}>
      <img src={image} alt={name} />
      <div className="cartItemInfo">
        <h2>{name}</h2>
        <div className="discountWrapper">
          <span>{discount}%</span>
          <span style={{ textDecoration: "line-through" }}>
            ₹{formatPrice(handleActualPrice(price, discount))}
          </span>
          <span>₹{formatPrice(price)}</span>
        </div>
        <div className="quantityInfo">
          <button onClick={() => dispatch(minusCart(id))}>-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={() => dispatch(addToCart(id))}>+</button>
        </div>
        <span className="totalPrice">₹{quantity * price}</span>
      </div>
      <button className="remove--item--btn" onClick={() => handleAnim(id)}>
        <LuTrash />
      </button>
    </div>
  );
};

export default CartItemComp;
