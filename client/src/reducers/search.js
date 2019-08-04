import axios from "axios";

const searchReducer = (state = 0, action) => {
  switch (action.type) {
    case "SEARCH":
      return (state += "bob");
    default:
      return state;
  }
};

// const searchData = () => {
//   axios.get("/zipcodeSearch/48197").then(response => {
//     let res = response.data.length;
//     let resFull = [];
//     // For every piece of data in the array push it to a resFull.
//     for (let i = 0; i < res; i++) {
//       resFull.push(response.data[i]);
//     }
//     return resFull;
//   });
// };

export default searchReducer;
