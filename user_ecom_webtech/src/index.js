import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/custom.css";
import "../src/assets/css/fontawesome.css";
import "./input.css";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
