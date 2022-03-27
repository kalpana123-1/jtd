import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";
import "./fontawesome";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
