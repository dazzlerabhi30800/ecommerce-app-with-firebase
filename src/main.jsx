import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SetContextProvider } from "./context/SetContext.jsx";
import { Provider } from "react-redux";
import store from "./ReduxReducers/Slice.jsx";
import { BrowserRouter as Router } from "react-router-dom";

// const store = configureStore({
//   reducer: {
//     allFeatures: productReducer,
//   },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <SetContextProvider>
    <Provider store={store}>
      <Router>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </Router>
    </Provider>
  </SetContextProvider>
);
