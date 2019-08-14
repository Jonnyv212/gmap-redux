import React from "react";

export const DisplayGData = props => {
  return (
    <div>
      <div key={props.Ddata.id} className="restaurantBlock">
        <ul>
          <h2>{props.Ddata.name}</h2>
          <li>Address: {props.Ddata.formatted_address}</li>
          <li>Place ID: {props.Ddata.place_id}</li>
        </ul>
      </div>
    </div>
  );
};
