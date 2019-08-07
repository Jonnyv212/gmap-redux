import React, { Component } from "react";
import DisplayData from "./DisplayData.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="gmap">
        <h1>Restaurants</h1>
        <p>Enter a zipcode</p>
        {/* <input type="text" value="48197" onChange={console.log("test")} /> */}

        <button>Click me</button>

        <DisplayData />
      </div>
    );
  }
}
export default App;
