import React from "react";

const LocationCard = ({ location }) => {

  return (
    <div id="locationCard">
      {console.log(location)}
      <p className="text">Name: {location.name}</p>
      <p className="text">Type of business: {location.types[0]}</p>
      <p className="text">Address: {location.vicinity}</p>
      <p className="text">Business status: {location.business_status}</p>
      <p className="text">Is the owner registered on allAccess?</p>
      <p className="text">If so, what is the owner's nickname?</p>
    </div>
  );
};

export default LocationCard;
