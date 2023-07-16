import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../Components/Data/ProductData.json";

// const initialState = {
//   products: [...ProductData.products],
//   showMenu: false,
// };
// console.log(initialState.products);

const productSlice = createSlice({
  name: "allFeatures",
  initialState: JSON.parse(localStorage.getItem("productItem")) || [
    ...ProductData.products,
  ],
  reducers: {
    addToCart: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity + 1;
          localStorage.setItem("productItem", JSON.stringify(state));
        } else {
          item = item;
        }
      });
    },
    minusCart: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity - 1 <= 0 ? 0 : item.quantity - 1;
          localStorage.setItem("productItem", JSON.stringify(state));
        } else {
          return item;
        }
      });
    },
  },
});

// const productSlice = createSlice({
//   name: "allFeatures",
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: Date.now(),
//         text: action.payload,
//       };
//       return [...state, todo];
//     },
//   },
// });

export const { addToCart, minusCart } = productSlice.actions;

export default productSlice.reducer;
