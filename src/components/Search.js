import React from "react";

function Search({handleSearchInput, searchInput}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearchInput} value={searchInput}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
