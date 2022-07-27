import React, { useState } from "react";

function Search({onSearch}) {

  const [query, setQuery] = useState('')

  const getQuery = e => {
    setQuery(e.target.value)
    onSearch(query)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => getQuery(e)}
      />
    </div>
  );
}

export default Search;
