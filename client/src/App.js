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

  placeList = () => {
    let gName = this.state.data.map(item => item.name);
    let gAddress = this.state.data.map(item => item.formatted_address);
    let gPlaceID = this.state.data.map(item => item.place_id);
    let dataIndex = this.state.data.length;
    let gFull = [];

    //Generate every project from state data.
    for (let i = 0; i < dataIndex; i++) {
      gFull.push(
        this.displayPlace(gName[i], gAddress[i], gPlaceID[i])
      );
    }
    return gFull;
  };

  displayPlace = (name, address, placeID) => {
    return(
    <div>
        <ul>
          <li>Name: {name}</li>
          <li>Address: {address}</li>
          <li>Place ID: {placeID}</li>
        </ul>
    </div>)
  }

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

  render() {
    return <div>
      <h1>Restaurants</h1>
      {this.placeList()}
    </div>;
  }
}
export default App;
