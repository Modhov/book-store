import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import Path from "./Path.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Path />
  </HashRouter>
);
