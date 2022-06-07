import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import SearchBar from "../components/Search/SearchBar";
import ResultsMapper from "../components/Search/ResultsMapper";
import UserCard from "../components/User/UserCard";
import axios from "axios";

const HomePage = () => {
  const [userInput, setUserInput] = useState("");
  const [locations, setLocations] = useState(null);
  const { user } = useContext(AuthContext);
  const decodedUser = localStorage.getItem("token");

  useEffect(() => {}, []);

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
      <h1>Hello World!!!</h1>
      <UserCard user={decodedUser} />
      <SearchBar placeSearch={placeSearch} userInput={userInput} setUserInput={setUserInput} />
      <ResultsMapper locations={locations} setLocations={setLocations} />
    </div>
  );
};

export default HomePage;
