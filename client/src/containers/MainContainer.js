import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { setGData, setSearchData } from "../actions/gDataActions";
import { DisplayRows } from "../components/DisplayRows";
import { Main } from "../components/MainComponent";
import "./MainContainer.css";
const MainContainer = () => {
  const myData = useSelector(state => state.dataStates.gData);
  const search = useSelector(state => state.dataStates.search);
  const dispatch = useDispatch();

  const pushDataToComponents = data => {
    let gFull = [];
    for (let i = 0; i < data.length; i++) {
      gFull.push(<DisplayRows Ddata={data[i]} />);
    }
    return gFull;
  };

  //Fetch data based on the search state
  useEffect(() => {
    dispatch(setGData(search));
  }, [dispatch]);

  //Set search state to value in input form box
  const handleSearchChange = e => {
    dispatch(setSearchData(e.target.value), []);
  };

  return (
    <div>
      <Main />
      Enter a zipcode:
      <div className="searchField">
        <form className="searchForm">
          <label>
            <input
              name="searchZipcode"
              type="search"
              value={search}
              onChange={handleSearchChange}
            />
          </label>
        </form>
        <button
          className="searchButton"
          onClick={() => {
            dispatch(setGData(search));
          }}
        >
          Submit
        </button>
      </div>
      {pushDataToComponents(myData)}
    </div>
  );
};

export default connect(
  null,
  null
)(MainContainer);
