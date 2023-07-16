import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import ProductData from "../Components/Data/ProductData.json";

// const initialState = {
//   products: [...ProductData.products],
//   showMenu: false,
// };
// console.log(initialState.products);

const productSlice = createSlice({
  name: "allFeatures",
  initialState: [...ProductData.products],
  reducers: {
    addToCart: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity + 1;
          //   localStorage.setItem("productItem", JSON.stringify(state));
        } else {
          item = item;
        }
      });
    },
    minusCart: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity - 1 <= 0 ? 0 : item.quantity - 1;
          //   localStorage.setItem("productItem", JSON.stringify(state));
        } else {
          return item;
        }
      });
    },
  },
});

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    console.log(getState().allFeatures);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

const rehydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
  }
};

const store = configureStore({
  reducer: {
    allFeatures: productSlice.reducer,
  },
  preloadedState: rehydrateStore(),
  middleware: getDefaultMiddleware().concat(localStorageMiddleware),
});

export const { addToCart, minusCart } = productSlice.actions;

// export default productSlice.reducer;
export default store;
