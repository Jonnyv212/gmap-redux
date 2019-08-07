const otherReducer = (state = 0, action) => {
  switch (action.type) {
    case "OTHER":
      return (state += 1);
    default:
      return state;
  }
};

export default otherReducer;
