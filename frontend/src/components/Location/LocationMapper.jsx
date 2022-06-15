import React from "react";
import LocationCard from "./LocationCard";

const LocationMapper = (props) => {
  return (
    <div id="locationsMapper">
      <p className="locationsMapper">
        {props.allLocations &&
          props.allLocations.map((location) => (
            <li key={location._id}>
              <LocationCard location={location} />
            </li>
          ))}
      </p>
    </div>
  );
};

export default LocationMapper;
