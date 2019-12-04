import React from 'react'

const PendingDocument = ({ name }) => {
  if(name) {
    return (
      <li className="pending">
        <span>
          {name}
        </span>
      </li>
    )
  }
  return null
}

export default PendingDocument;
