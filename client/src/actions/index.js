import axios from "axios";

// export const search = searchData => {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch({
//         type: "SEARCH",
//         payload: searchData
//       });
//     }, 2000);
//   };
// };

export const search = () => {
  return dispatch => {
    return axios.get("/zipcodeSearch/48197").then(response => {
      dispatch(fetchData(response.data));
    });
  };
};

export const fetchData = payload => {
  return {
    type: "SEARCH",
    payload
  };
};
