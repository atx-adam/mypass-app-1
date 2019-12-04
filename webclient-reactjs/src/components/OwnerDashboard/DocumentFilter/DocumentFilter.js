import React from 'react';

const DocumentFilter = ({ toggleFilter, isFiltered }) => {
  return (
    <div>
      <h2>Imports</h2>
      <label><input type="checkbox" onChange={toggleFilter} checked={isFiltered} />Hide unselected documents</label>
    </div>
  )
}

export default DocumentFilter;
