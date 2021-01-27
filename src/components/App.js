import React from "react";
import "../styles/App.css";
import EmployeeList from "./EmployeeList.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <EmployeeList data={this.props.employee_data} />
      </div>
    );
  }
}

export default App;
