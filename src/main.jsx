import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SetContextProvider } from "./context/SetContext.jsx";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ReduxReducers/Slice.jsx";
import { Provider } from "react-redux";
import store from "./ReduxReducers/Slice.jsx";

// const store = configureStore({
//   reducer: {
//     allFeatures: productReducer,
//   },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <SetContextProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </SetContextProvider>
);
