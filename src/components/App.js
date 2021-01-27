import React from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.employee_data);
    return (
      <div className="App">
        <div>
          {this.props.employee_data.map((item, idx) => {
            return <li> {item.name}</li>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
