import axios from "axios";

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

export const other = () => {
  return {
    type: "OTHER"
  };
};
