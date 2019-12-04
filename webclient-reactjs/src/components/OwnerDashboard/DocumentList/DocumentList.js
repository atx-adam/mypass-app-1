import React from 'react';
import Document from './Document/Document';
import PendingDocument from './PendingDocument/PendingDocument'

const DocumentList = ({
  pendingDocument,
  filteredDocuments,
  isFiltered,
  url,
  isSelected,
  isEditing,
  setName,
  toggleEditing,
  toggleSelected,
  removeDocument }) => {
    return (
      <ul>
      <PendingDocument name={pendingDocument} />
      {filteredDocuments.filter(document => !isFiltered || document.isSelected).map((document, index) =>
        <Document
        key={index}
        name={document.name}
        url={document.url}
        isSelected={document.isSelected}
        isEditing={document.isEditing}
        handleSelected={() => toggleSelected(document.id)}
        handleToggleEditing={() => toggleEditing(document.id)}
        setName={text => setName(text, document.id)}
        handleRemove={() => removeDocument(document.id)} />
       )}
      </ul>
    )
}

export default DocumentList;
