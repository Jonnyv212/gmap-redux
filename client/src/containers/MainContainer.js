import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { setGData, setDisplayComp } from "../actions/gDataActions";
import { DisplayGData } from "../components/DisplayGData.js";

import { Main } from "../components/MainComponent";

const MainContainer = () => {
  const myData = useSelector(state => state.dataStates.gData);
  const myComponents = useSelector(state => state.dataStates.displayComp);
  const dispatch = useDispatch();

  const fetchData = () => {
    let gFull = [];
    for (let i = 0; i < myData.length; i++) {
      gFull.push(<DisplayGData Ddata={myData[i]} />);
    }
    return gFull;
  };

  useEffect(() => {
    dispatch(setGData());
  }, [dispatch]);

  useEffect(() => dispatch(setDisplayComp(fetchData()), []));

  return <div>{myComponents}</div>;
};

export default connect(
  null,
  null
)(MainContainer);
