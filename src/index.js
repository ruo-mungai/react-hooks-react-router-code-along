import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Apps from "./Components/Apps";

ReactDOM.render(
  <BrowserRouter>
    <Apps />
  </BrowserRouter>,
  document.getElementById("root")
);