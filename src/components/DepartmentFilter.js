import React from "react";
import Select from "react-select";
import "../styles/App.css";
import employee_data from "../EmployeeData.js";

const options = [
  { value: "", label: "Filter By Department" },
  { value: "Music", label: "Music" },
  { value: "Film", label: "Film" },
  { value: "Sports", label: "Sports" },
];

class DepartmentFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: employee_data,
      departments: [],
    };
  }

  render() {
    return (
      <div>
        <Select
          options={options}
          defaultValue={options[0]}
          onChange={this.props.onChange}
          className="selector"
        />
      </div>
    );
  }
}

export default DepartmentFilter;
