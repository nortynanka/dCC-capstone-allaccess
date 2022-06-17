import React from "react";

const SearchBar = ({ setUserInput, userInput, placeSearch }) => {
  function beginNewSearch(event) {
    event.preventDefault();
    placeSearch();
  }

  return (

    <form onSubmit={(e) => beginNewSearch(e)} className="form-grid">
      <div className="form-group">
        <label>Search</label>
        <input
          type="text"
          className="form-control"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
      </div>
      <button onClick="handleSubmit" type="submit">
        Search
      </button>

    </form>
  );
};

export default SearchBar;
