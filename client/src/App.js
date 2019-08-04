import React, { Component } from "react";
import axios from "axios";
// import {useSelector} from 'react-redux';
import "./App.css";
import Counter from "./counter.js";
// var test = require('./test.js');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: "48197",
      input: "",
      loadingEnabled: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // this.getData();
    this.searchData();
    // this.setState({
    //   output: this.placeList()
    // });
  }

  // getData = () => {
  //   axios.get("/annarbor").then(response => {
  //     let res = response.data.length;
  //     let resFull = [];
  //     // For every piece of data in the array push it to a resFull.
  //     for (let i = 0; i < res; i++) {
  //       resFull.push(response.data[i]);
  //     }
  //     // Set the data state to array after pushing data to resFull[].
  //     this.setState({
  //       data: resFull
  //     })
  //   })
  // };

  searchData = () => {
    this.setState({ input: this.state.search }, () => {
      axios.get("/zipcodeSearch/" + this.state.input).then(response => {
        let res = response.data.length;
        let resFull = [];
        // For every piece of data in the array push it to a resFull.
        for (let i = 0; i < res; i++) {
          resFull.push(response.data[i]);
        }
        this.setState({
          data: resFull
        });
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
      <div className="restaurantBlock">
        <ul>
          {/* <img src={icon} /> */}
          <h2>{name}</h2>
          <li>Address: {address}</li>
          <li>Place ID: {placeID}</li>
        </ul>
      </div>
    );
  };

  handleSearch = event => {
    this.setState({ search: event.target.value });
  };

  handleClick = () => {
    this.setState({ input: this.state.search }, console.log(this.state.input));
  };

  render() {
    if (!this.state.data.length) {
      if (this.state.loadingEnabled == true) {
        return <div>Loading...</div>;
      }
    }
    return (
      <div className="gmap">
        <Counter />
        <h1>Restaurants</h1>
        <p>Enter a zipcode</p>
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleSearch.bind(this)}
        />

        <button onClick={this.searchData}>Click me</button>

        {this.placeList()}
      </div>
    );
  }
}
export default App;
