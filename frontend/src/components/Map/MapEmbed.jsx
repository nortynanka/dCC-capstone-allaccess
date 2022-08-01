import React from "react";

import "./MapEmbed.css";

const MapEmbed = ({ userInput }) => {

  return (
    <div className="mapEmbed">
      <iframe
        title="mapEmbed"
        width="720"
        height="330"
        frameborder="0"
        referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/search?key=${API_KEY_HERE}&q=${userInput}`}
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MapEmbed;
