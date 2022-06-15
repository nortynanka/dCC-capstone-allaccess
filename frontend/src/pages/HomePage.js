import React, { useState } from "react";
import SearchBar from "../components/Search/SearchBar";
import ResultsMapper from "../components/Search/ResultsMapper";
import axios from "axios";

import "./PageStructure.css";

const HomePage = () => {
  const [userInput, setUserInput] = useState("");
  const [locations, setLocations] = useState(null);

  const placeSearch = async () => {
    await axios
      .get(`http://localhost:3013/api/locations/googlePlace/${userInput}`)
      .then((res) => {
        console.log(res.data)
        setLocations(res.data)}
        );
  };

  return (
    <div>
      <h3><b><i>Search</i></b> for a Milwaukee business</h3>
      <SearchBar placeSearch={placeSearch} userInput={userInput} setUserInput={setUserInput} />
      <ResultsMapper locations={locations} setLocations={setLocations} />
    </div>
  );
};

export default HomePage;