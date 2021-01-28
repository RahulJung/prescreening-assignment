import React from "react";
import "../styles/App.css";

import Navbar from "./Navbar.js";
import EmployeeList from "./EmployeeList.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Navbar data={this.props.employee_data} />
      </div>
    );
  }
}

export default App;
