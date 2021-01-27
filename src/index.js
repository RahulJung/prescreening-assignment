import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import employee_data from "./EmployeeData.js";

ReactDOM.render(
  <React.StrictMode>
    <App employee_data={employee_data} />
  </React.StrictMode>,
  document.getElementById("root")
);
