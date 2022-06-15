import axios from "axios";
import React, { useState } from "react";

const Map = (props) => {

  const staticMap = async () => {
    await axios
      .get(
        `http://localhost:3013/api/locations/staticMap/:userAddress/:resultsAddresses`
      )
      .then((res) => {
        console.log(res.data);
        setLocations(res.data);
      });
  };

  return (
    <div className="staticMap">
      <h3>
        <i>View</i> a map of locations nearby.
      </h3>
    </div>
  );
};

export default Map;
