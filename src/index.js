import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataProvider from "./context/DataProvider";

let MyCon = createContext("");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);

export default MyCon;
