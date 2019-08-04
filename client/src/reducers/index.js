import searchReducer from "./search";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  search: searchReducer
});

export default allReducers;
