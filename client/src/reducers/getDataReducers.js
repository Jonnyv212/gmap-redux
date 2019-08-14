const getDataReducers = (
  state = {
    gData: [],
    displayComp: []
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
    case "DISPLAY_COMP":
      state = {
        ...state,
        displayComp: action.payload
      };
      break;
  }
  return state;
};

// async function search(){
// let myData = axios.get("/zipcodeSearch/48197").then(response => {
//       return response.data;
//     });
//     console.log(myData)
//     return await myData;
// };
export default getDataReducers;
