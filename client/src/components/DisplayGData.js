import React from "react"


 export const DisplayGData = (props) => {
    return (
      <div>
          <div key={props.gData.id} className="restaurantBlock">
            <ul>
              <h2>{props.gData.name}</h2>
              <li>Address: {props.gData.formatted_address}</li>
              <li>Place ID: {props.gData.place_id}</li>
            </ul>
          </div>
      </div>
    );
  };

  // export default DisplayGData;