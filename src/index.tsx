import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./reset.css";
import "./styles/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
