import React from 'react';

const SearchBox = ({updateSearch, search}) => {
 
  return (
    <div className="search-bar">
      <input type="text"
      className="search-bar-padding"
      placeholder="Select documents..."
      value={search}
      onChange={updateSearch} />
    </div>
  )
}

export default SearchBox;
