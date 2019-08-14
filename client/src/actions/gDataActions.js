import axios from "axios";

export const setGData = () => {
  return async dispatch => {
    let resFull = await axios.get("/zipcodeSearch/48197");

    dispatch({
      type: "GET_DATA",
      payload: resFull.data
    });
  };
};

// let resFull = [];
// await axios.get("/zipcodeSearch/48197").then(response => {
//   let res = response.data.length;
//   // For every piece of data in the array push it to a resFull.
//   for (let i = 0; i < res; i++) {
//     resFull.push(response.data[i]);
//   }
// });

export function setDisplayComp(components) {
  return dispatch => {
    dispatch({
      type: "DISPLAY_COMP",
      payload: components
    });
  };
}
// export function setDisplayComp(components){
//     return dispatch => {
//             dispatch({
//                 type: "DISPLAY_COMP",
//                 payload: components
//         })
//     }
// }
