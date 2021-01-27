import React from "react";
class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }

  render() {
    let filteredItem = this.props.data.filter((data) => {
      return data.name.toLowerCase().indexOf(this.state.search) !== -1;
    });
    return (
      <div>
        <div>
          {filteredItem.map((item, idx) => {
            return (
              <li key={idx}>
                {item.name} {"-"} {item.department} {"-"} {item.age}
              </li>
            );
          })}
          <div>
            <input
              type="text"
              value={this.state.search}
              onChange={this.updateSearch}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeList;
