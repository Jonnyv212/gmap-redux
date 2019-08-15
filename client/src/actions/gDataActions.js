import axios from "axios";
import { useSelector, useDispatch } from "react-redux";


export const setGData = (search) => {
  return async dispatch => {
    // const search = useSelector(state => state.dataStates.search);

    let resFull = await axios.get("/zipcodeSearch/" + search);

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