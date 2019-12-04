import React from 'react';

const Counter = ({ numberSelected, numberUnselected, totalDocuments }) => {
  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Selected Documents</td>
          <td>{numberSelected}</td>
        </tr>
        <tr>
          <td>Unselected Documents</td>
          <td>{numberUnselected}</td>
        </tr>
        <tr>
          <td>Total Documents</td>
          <td>{totalDocuments}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Counter;
