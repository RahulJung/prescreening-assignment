import React from "react";
import "../styles/App.css";
import { Table } from "react-bootstrap";
import DepartmentFilter from "./DepartmentFilter.js";
import AgeFilter from "./AgeFilter.js";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      age: [],
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.updateChange = this.updateChange.bind(this);
    this.updateAge = this.updateAge.bind(this);
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }

  updateChange(value) {
    this.setState({
      search: value.value,
    });
  }

  updateAge(value) {
    this.setState({
      age: value.value,
    });
  }

  render() {
    // Filter employee list
    let filteredItem = this.props.data.filter((data) => {
      console.log(data.age);
      if (data.age >= this.state.age[0] && data.age <= this.state.age[1]) {
        return data.age >= this.state.age[0] && data.age <= this.state.age[1];
      }
      if (
        data.department
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      ) {
        return (
          data.department
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1
        );
      }
      if (
        data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      ) {
        return (
          data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
        );
      }
    });
    return (
      <div className="container">
        <div className="navBar">
          <div className="logoContainer">
            <div className="logo">Employee List</div>
          </div>
          <div className="btnContainers">
            <ul className="links">
              <li>
                <div className="item ">
                  <input
                    type="text"
                    onChange={this.updateSearch}
                    placeholder="Search Employee"
                  ></input>
                </div>
              </li>
              <li className="filter">
                <DepartmentFilter onChange={this.updateChange} />
              </li>
              <li className="filter">
                <AgeFilter onChange={this.updateAge} />
              </li>
            </ul>
          </div>
        </div>
        <div className="review">
          <Table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Department</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {filteredItem.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.age}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default Navbar;
