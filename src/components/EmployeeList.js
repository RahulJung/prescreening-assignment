import React from "react";
import { Table, Button } from "react-bootstrap";

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
          <h2>Product List</h2>
          <Table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Department</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItem.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.age}</td>
                  <td>
                    <Button
                      //   variant="info"
                      //   onClick={() => this.props.editProduct(item.name)}
                      Hello
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div>
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch}
          ></input>
        </div>
      </div>
    );
  }
}

export default EmployeeList;
