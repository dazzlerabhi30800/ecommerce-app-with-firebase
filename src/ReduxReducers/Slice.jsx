import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import ProductData from "../Components/Data/ProductData.json";

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
          if (searchCart) {
            searchCart.quantity += 1;
          } else {
            state.cart.push({ ...item, isAnimate: false });
          }
        } else {
          item = item;
        }
      });
    },
    minusCart: (state, action) => {
      state.products.map((item) => {
        if (item.id === action.payload) {
          item.quantity = item.quantity - 1 <= 0 ? 0 : item.quantity - 1;
          const searchCart = state.cart.find((cart) => cart.id === item.id);
          if (searchCart) {
            searchCart.quantity =
              searchCart.quantity - 1 <= 0 ? 0 : searchCart.quantity - 1;
          } else {
            return;
          }
          state.cart = state.cart.filter((item) => item.quantity >= 1);
        } else {
          return item;
        }
      });
    },
    removeCart: (state, action) => {
      state.products.map((item) => {
        if (item.id === action.payload) {
          item.quantity = 0;
          state.cart = state.cart.filter((product) => product.id !== item.id);
        } else {
          return item;
        }
      });
    },
    sortCartDescending: (state, action) => {
      state.products = state.products.sort((a, b) => b.price - a.price);
    },
    sortCartAscending: (state, action) => {
      state.products = state.products.sort((a, b) => a.price - b.price);
    },
  },
});

// to show input and dropdown menus etc

const menuSlice = createSlice({
  name: "showComp",
  initialState: {
    showInput: false,
    showDropdown: false,
  },
  reducers: {
    showFullInput: (state, action) => {
      state.showInput = !state.showInput;
    },
    handleDropdown: (state, action) => {
      state.showDropdown = !state.showDropdown;
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
    showAllComps: menuSlice.reducer,
  },
  preloadedState: rehydrateStore(),
  middleware: getDefaultMiddleware().concat(localStorageMiddleware),
});

export const {
  addToCart,
  minusCart,
  removeCart,
  sortCartAscending,
  sortCartDescending,
} = productSlice.actions;

export const { showFullInput, handleDropdown } = menuSlice.actions;

// export default productSlice.reducer;
export default store;
