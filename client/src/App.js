import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  getData = () => {
    axios.get("/googledata").then(response => {
      this.setState({
        data: response.data
      });
    });
  };

  //Assign list to a UL that contains the returned li from the for loop.
  // let list = <ul className="dataUL">{resFull}</ul>;

  //Set the state of the parameter statevalue to the returned list.
  //   this.setState({
  //     [stateValue]: list
  //   });
  // })
  // .catch(error => {
  //   console.log(error);
  // });
  // };

  componentDidMount() {
    // this.getData();
    this.getData();
    // console.log(process.env);
  }

  App = () => {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  };

  render() {
    return <div>{this.state.data}</div>;
  }
}
export default App;
