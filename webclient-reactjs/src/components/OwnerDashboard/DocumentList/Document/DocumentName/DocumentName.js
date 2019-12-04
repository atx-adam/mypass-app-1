import React from 'react';

const DocumentName = ({ children, handleNameEdits, isEditing }) => {
  if (isEditing) {
    return (
      <input
      type="text"
      value={children}
      onChange={handleNameEdits} />
    );
  }
  return (
    <span>
      {children}
    </span>
  )
}

export default DocumentName;
