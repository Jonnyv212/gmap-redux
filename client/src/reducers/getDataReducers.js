const getDataReducers = (
  state = {
    gData: [],
    // displayComp: [],
    search: "48197"
  },
  action
) => {
  switch (action.type) {
    case "GET_DATA":
      state = {
        ...state,
        gData: action.payload
      };
      break;
    // case "DISPLAY_COMP":
    //   state = {
    //     ...state,
    //     displayComp: action.payload
    //   };
    //   break;
    case "SEARCH_DATA":
      state = {
        ...state,
        search: action.payload
      };
      break;
  }
  return state;
};

export default getDataReducers;
