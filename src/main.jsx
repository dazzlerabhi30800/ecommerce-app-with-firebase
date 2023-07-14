import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SetContextProvider } from "./context/SetContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SetContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SetContextProvider>
);
