import React, { useState } from "react";
import axios from "axios";

import SearchBar from "../components/Search/SearchBar";
import ResultsMapper from "../components/Search/ResultsMapper";
import MapEmbed from "../components/Map/MapEmbed";

const HomePage = () => {
  const [userInput, setUserInput] = useState("");
  const [locations, setLocations] = useState(null);

  const placeSearch = async () => {
    await axios
      .get(`http://localhost:3013/api/locations/googlePlace/${userInput}`)
      .then((res) => {
        console.log(res.data);
        setLocations(res.data);
      });
  };

  return (
    <div className="container">
      <h3>
        <b>
          <i>Search</i>
        </b>{" "}
        for a business or venue near you:
      </h3>
      <SearchBar
        placeSearch={placeSearch}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <ResultsMapper locations={locations} setLocations={setLocations} />
      <MapEmbed userInput={userInput}/>
    </div>
  );
};

export default HomePage;
