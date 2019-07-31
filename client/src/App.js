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

  componentDidMount() {
    this.getData();
    this.setState({
      data: this.placeList()
    });
  }

  getData = () => {
    axios.get("/annarbor").then(response => {
      let res = response.data.length;
      let resFull = [];
      // For every piece of data in the array push it to a resFull.
      for (let i = 0; i < res; i++) {
        resFull.push(response.data[i]);
      }
      // Set the data state to array after pushing data to resFull[].
      this.setState({
        data: resFull
      });
    });
  };

  searchData = () => {
    axios.get("/zipcodeSearch/" + this.state.search).then(response => {
      this.setState({
        data: response.data
      });
    });
  };

  placeList = () => {
    let gName = this.state.data.map(item => item.name);
    let gAddress = this.state.data.map(item => item.formatted_address);
    let gPlaceID = this.state.data.map(item => item.place_id);
    let gIcon = this.state.data.map(item => item.icon);

    let dataIndex = this.state.data.length;
    let gFull = [];

    //Generate every project from state data.
    for (let i = 0; i < dataIndex; i++) {
      gFull.push(
        this.displayPlace(gName[i], gAddress[i], gPlaceID[i], gIcon[i])
      );
    }
    return gFull;
  };

  displayPlace = (name, address, placeID, icon) => {
    return (
      <div>
        <ul>
          {/* <img src={icon} /> */}
          <h2>{name}</h2>
          <li>Address: {address}</li>
          <li>Place ID: {placeID}</li>
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Restaurants</h1>
        {this.placeList()}
      </div>
    );
  }
}
export default App;
