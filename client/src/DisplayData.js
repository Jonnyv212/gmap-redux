import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

const DisplayData = () => {
  const dispatch = useDispatch();
  const searchSelector = useSelector(state => state.search);
  const otherSelector = useSelector(state => state.other);

  return (
    <div>
      <button onClick={() => dispatch({ type: "OTHER" })}>Other</button>
      {otherSelector}
      {mapData(searchSelector)}
    </div>
  );
};

const mapData = data => {
  let gFull = [];
  for (let i = 0; i < data.length; i++) {
    gFull.push(
      displayPlace(
        data[i].id,
        data[i].name,
        data[i].formatted_address,
        data[i].place_id
      )
    );
  }
  return gFull;
};

const displayPlace = (id, name, address, placeID) => {
  return (
    <div key={id} className="restaurantBlock">
      <ul>
        <h2>{name}</h2>
        <li>Address: {address}</li>
        <li>Place ID: {placeID}</li>
      </ul>
    </div>
  );
};

export default connect()(DisplayData);
