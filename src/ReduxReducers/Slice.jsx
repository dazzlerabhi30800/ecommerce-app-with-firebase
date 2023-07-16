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
  initialState: {
    products: [...ProductData.products],
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.products.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity + 1;
          const searchCart = state.cart.find((cart) => cart.id === item.id);
          state.cart = state.products.filter(
            (product) => product.quantity >= 1
          );
        } else {
          item = item;
        }
      });
    },
    minusCart: (state, action) => {
      state.products.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity - 1 <= 0 ? 0 : item.quantity - 1;
          state.cart = state.products.filter(
            (product) => product.quantity >= 1
          );
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
