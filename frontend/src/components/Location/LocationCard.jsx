import React from "react";
import { useNavigate} from "react-router-dom";

import "./LocationCard.css";

const LocationCard = ({ location }) => {

  const navigate = useNavigate();

  return (
    <div id="locationCard">
      {console.log(location)}
      <p className="text">Name: {location.name}</p>
      <p className="text">Type of business: {location.types[0]}</p>
      <p className="text">Address: {location.vicinity}</p>
      <p className="text">Business status: {location.business_status}</p>
      <p className="text">Is the owner registered on allAccess?</p>
      <p className="text">If so, what is the owner's nickname?</p>
      <p className="text">Here's what others had to say about {location.name}: {[location.posts]}</p>
      <button onClick={navigate("/feedback")}>Share your Experience</button>
    </div>
  );
};

export default LocationCard;
