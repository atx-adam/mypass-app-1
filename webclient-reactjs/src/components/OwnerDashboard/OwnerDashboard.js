import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBox from './SearchBox/SearchBox';
import Counter from './Counter/Counter';
import DocumentFilter from './DocumentFilter/DocumentFilter';
import DocumentList from './DocumentList/DocumentList';

export const OwnerDashboard = ({
  user,
  onSignOut,
  toggleFilter,
  isFiltered,
  totalDocuments,
  numberSelected,
  updateSearch,
  numberUnselected,
  filteredDocuments,
  toggleSelected,
  toggleEditing,
  setName,
  search,
  removeDocument,
  newDocumentSubmitHandler,
  handleNameInput,
  getDocuments,
  url,
  pendingDocument }) => {
  return (
    <div className="dashboard-container">

          <header className="dash-header">
            <h1>Owner Dashboard</h1>
            <h1>Welcome: {user.username}</h1>
            <a href="" onClick={onSignOut}>Sign out</a>
            <Row>
              <Col>
            <form className="dashboard-form" onSubmit={getDocuments}>
              <input className="dash-input" type="file" name="document" id="document" onChange={handleNameInput} />
              <button className="dash-btn" type="button" name="submit" value="submit" onClick={newDocumentSubmitHandler}>
                Submit
              </button>
            </form>
            </Col>
          </Row>
          </header>

      <div className="dash-main">
        <Row>
          <Col>
            <DocumentFilter
            toggleFilter={toggleFilter}
            isFiltered={isFiltered} />
          </Col>
          <Col>
            <SearchBox 
            updateSearch={updateSearch} 
            search={search} />
          </Col>
          <Col>
            <Counter
            totalDocuments={totalDocuments}
            numberSelected={numberSelected}
            numberUnselected={numberUnselected} />
          </Col>
        </Row>
        <Row>
        <Col>
        <DocumentList
        filteredDocuments={filteredDocuments}
        toggleSelected={toggleSelected}
        toggleEditing={toggleEditing}
        setName={setName}
        isFiltered={isFiltered}
        removeDocument={removeDocument}
        url={url}
        pendingDocument={pendingDocument} />
        </Col>
        </Row>
      </div>
    </div>
  )
}
