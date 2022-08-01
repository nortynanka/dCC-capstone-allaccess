import React from "react";

import "./SearchBar.css";

const SearchBar = ({ setUserInput, userInput, placeSearch }) => {
  function beginNewSearch(event) {
    event.preventDefault();
    placeSearch();
  }

  return (
    <form onSubmit={(e) => beginNewSearch(e)} className="form-grid">
      <div className="form-group">
        <p>
          <label>
            What kind of place do you need?{" "}
            <input
              type="text"
              className="form-control"
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
          </label>
        </p>
      </div>
      <p>
        <button type="submit">Search</button>
      </p>
    </form>
  );
};

export default SearchBar;
