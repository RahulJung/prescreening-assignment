import React from "react";
import Select from "react-select";
import "../styles/App.css";

const options = [
  { value: [17, 69], label: "Filter By Age" },
  { value: [14, 19], label: "14-19" },
  { value: [20, 29], label: "20-29" },
  { value: [30, 39], label: "30-39" },
  { value: [40, 49], label: "40-49" },
  { value: [50, 59], label: "50-59" },
  { value: [60, 69], label: "60-69" },
];

class AgeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Select
          options={options}
          defaultValue={options[0]}
          onChange={this.props.onChange}
          className="Selector"
        />
      </div>
    );
  }
}

export default AgeFilter;
