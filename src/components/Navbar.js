import React from "react";
import "../styles/App.css";
import { Button } from "react-bootstrap";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <h2>Product List</h2>
          <Button>Add Employee</Button>
          <Button onClick={() => window.print()} type="button">
            Print Collection
          </Button>
        </nav>
      </div>
    );
  }
}
export default Navbar;
