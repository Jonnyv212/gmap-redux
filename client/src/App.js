import React, { Component } from "react";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  render() {
    return (
      <div className="gmap">
        {/* <input type="text" value="48197" onChange={console.log("test")} /> */}

        {/* <button>Click me</button> */}

        <MainContainer />
      </div>
    );
  }
}
export default App;
