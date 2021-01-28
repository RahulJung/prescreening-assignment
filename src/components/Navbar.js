import React from "react";
import "../styles/App.css";
// import { Button } from "react-bootstrap";
// import React from "react";
import { Table, Button } from "react-bootstrap";
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
    console.log("update search");
    this.setState({
      search: event.target.value,
    });
  }

  updateChange(value) {
    console.log("update change");
    this.setState({
      search: value.value,
    });
  }

  updateAge(value) {
    console.log("update age");
    this.setState({
      age: value.value,
    });
  }

  render() {
    let filteredItem = this.props.data.filter((data) => {
      if (data.age >= this.state.age[0] && data.age <= this.state.age[1]) {
        return;
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
      <div>
        <div className="navBar">
          <div className="logoContainer">
            <div className="logo">Employee List</div>
          </div>
          <div>
            <ul className="links">
              <li>
                <div className="item ">
                  <input type="text" onChange={this.updateSearch}></input>
                </div>
              </li>
              <li className="filter">
                <DepartmentFilter onChange={this.updateChange} />
              </li>
              <li className="filter">
                <AgeFilter onChange={this.updateAge} />
              </li>
              {/* <li>
              <a className="item " href="#">
                <Button>Add Employee</Button>
              </a>
            </li> */}
              <li className="item ">
                <a href="#">
                  <Button
                    onClick={() => window.print()}
                    type="button"
                    className="btn"
                  >
                    Print Collection{" "}
                  </Button>
                </a>
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
