import searchReducer from "./search";
import otherReducer from "./other";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  search: searchReducer,
  other: otherReducer
});

export default allReducers;
