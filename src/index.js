import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/App/App";

const Application = () => {
  return (
        < Router >
        <App/>
        </Router>
        );
};
const mountNode = document.getElementById("root");

render(< Application / > , mountNode);