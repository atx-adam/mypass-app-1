import React from 'react';
import DocumentName from './DocumentName/DocumentName';

const Document = ({ isEditing, name, setName, url, isSelected, handleRemove, handleSelected, handleToggleEditing }) => {
  const imageClick = () => {
    console.log('Click')
  }
  return (
    <li>
      <DocumentName
      isEditing={isEditing}
      handleNameEdits={e => setName(e.target.value)}>
      <a href={url}>
        <img src={url} alt='' width="100" onClick={() => imageClick()} />
      </a>
      {name}
      </DocumentName>
      <label>
        <input
        type="checkbox"
        checked={isSelected}
        onChange={handleSelected} /> Selected
      </label>
      <button className="dash-btn" onClick={handleToggleEditing}>
        {isEditing ? "save" : "edit"}
      </button>
      <button onClick={handleRemove}>remove</button>
    </li>
  )
}

export default Document;
