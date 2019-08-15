import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { setGData, setDisplayComp, setSearchData } from "../actions/gDataActions";
import { DisplayRows } from "../components/DisplayRows";
import { Main } from "../components/MainComponent";

const MainContainer = () => {
  const myData = useSelector(state => state.dataStates.gData);
  const myComponents = useSelector(state => state.dataStates.displayComp);
  const search = useSelector(state => state.dataStates.search);

  const dispatch = useDispatch();

  const pushDataToComponents = (data) => {
    let gFull = [];
    for (let i = 0; i < data.length; i++) {
      gFull.push(<DisplayRows Ddata={data[i]} />);
    }
    return gFull;
  };

  // useEffect(() => dispatch(setSearchData("48195")),[])

  //Fetch data based on the search state
  useEffect(() => {
    dispatch(setGData(search));
  }, [dispatch]);

  useEffect(() => dispatch(setDisplayComp(pushDataToComponents(myData)), [search]));

  // useEffect(() => dispatch(setSearchData("48195")),[])

  return <div>
    Searching: {search}
    <Main />
    <button onClick={() => dispatch(setSearchData("48195"))}>Test</button>
  {myComponents}
  </div>;
};

export default connect(
  null,
  null
)(MainContainer);
