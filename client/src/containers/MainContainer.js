import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { setGData, setDisplayComp } from "../actions/gDataActions"
import { DisplayGData } from "../components/DisplayGData.js"

import { Main } from "../components/MainComponent"

import axios from "axios";



const MainContainer = () => {
  const myData = useSelector(state => state.dataStates.gData)
  const myComponents = useSelector(state => state.dataStates.displayComp)
  const dispatch = useDispatch();
// async function search(){
//   let myData = axios.get("/zipcodeSearch/48197").then(response => {
//         return response.data;
//       });
//       console.log(myData)
//       return await myData;
//   };
const fetchData = () => {
  let resFull = [];
  axios.get("/zipcodeSearch/48197")
  .then(response => {
    let res = response.data.length;
    // For every piece of data in the array push it to a resFull.
    for (let i = 0; i < res; i++) {
      resFull.push(response.data[i]);
    }
  });
  dispatch(setGData(resFull))
};

 const setComponentData = (data) => {
  let gFull = [];
  for (let i = 0; i < data.length; i++) {
    gFull.push(
      // <DisplayGData myData/>
      <div>test</div>
    );
  }
  dispatch(setDisplayComp(gFull))
};
// const DisplayData = () => {
//   const dispatch = useDispatch();
//   const searchSelector = useSelector(state => state.search);
//   const otherSelector = useSelector(state => state.other);

//   return (
//     <div>
//       <button onClick={() => dispatch({ type: "SEARCH" })}>Other</button>
//       {/* {searchSelector} */}
//       {/* {mapData(searchSelector)} */}
//     </div>
//   );
// };

useEffect(async () => { await fetchData()
  setComponentData(myData);
}
  ,[])
// useEffect(setComponentData(),[]);

  return(
    <div>
      <button onClick={() => myComponents}>Test</button>
      {myComponents}
      {/* <Main getData={()=> this.props.setGData(getData())} /> */}
      {/* <DisplayGData gData={this.props.gData}/> */}
      {/* {this.props.search.name} */}
      {/* <button onClick ={() => {console.log(getData())}}>Click me</button> */}
    </div>
  )
}


const mapStateToProps = (state) =>{
  return {
      gData: state.gData,
      displayComp: state.displayComp
  }
}
export default connect(mapStateToProps, null)(MainContainer);
