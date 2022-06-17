import React from "react";

const MapEmbed = ({userInput}) => {



  return (
    <iframe
      title="mapEmbed"
      width="450"
      height="250"
      frameborder="0"
      referrerpolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/search?key=API_KEY&q=${userInput}`}
      allowfullscreen
    ></iframe>
  );
};

export default MapEmbed;
