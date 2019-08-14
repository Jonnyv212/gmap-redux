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

export const setDisplayComp = (components) => {
  return dispatch => {
    dispatch({
      type: "DISPLAY_COMP",
      payload: components
    });
  };
}

export const setSearchData = (value) => {
  return dispatch => {
    dispatch({
      type: "SEARCH_DATA",
      payload: value
    })
  }
}