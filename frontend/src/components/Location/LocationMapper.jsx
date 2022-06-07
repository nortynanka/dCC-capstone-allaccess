import React from "react";
import LocationCard from "./LocationCard";

const LocationMapper = (props) => {
  return (
    <div id="userMapper">
      <ul className="locationsMapper">
        {props.allLocations &&
          props.allLocations.map((location) => (
            <li key={location._id}>
              <LocationCard location={location} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LocationMapper;
