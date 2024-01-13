import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/common.less";
import AppRouter from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter></AppRouter>
  </React.StrictMode>
)