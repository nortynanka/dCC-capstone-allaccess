import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/Search/SearchBar";

const HomePage = () => {
  const [userInput] = useState("");
  const [setLocations] = useState(null);

  useEffect(() => {}, []);

  const placeSearch = async () => {
    await axios
      .get(`http://localhost:3013/api/locations/googlePlace/${userInput}`)
      .then((res) => {
        console.log(res.data.results.place_id);
        setLocations(res.data);
        return res.data.results.place_id;
      });
  };

  return (
    <div>
      <SearchBar />
    </div>
  );
};

//   const detailReq = async () => {
//     await axios.get(`https://maps.googleapis.com/maps/api/place/details/output?${res.data.results.place_id}`).then((res) =>)
//   }

//   };

export default HomePage;