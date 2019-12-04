import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { Home, OwnerDashboard, ToggleBar, ServiceProviderHomePage, ServiceProviderOwnerDoc } from './components/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const App = () => {

  const [user, setUser] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState("");
  const [pendingDocument, setPendingDocument] = useState("");

  const signIn = (username, password) => {
    setUser({
      username,
      password
    })
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const signOut = () => {
    setUser(null)
  }

  const toggleDocumentProperty = (property, id) => {
    setDocuments(documents.map(document => {
      if(id === document.id) {
        return {
          ...document,
          [property]: !document[property]
        };
      }
      return document;
    }))
  }

  const toggleSelected = id => {
   toggleDocumentProperty("isSelected", id);
  }

  const removeDocument = id => {
    setDocuments(documents.filter(document => id !== document.id))
  }

  const toggleEditing = id => {
    toggleDocumentProperty("isEditing", id);
  }

  const setName = (name, id) => {
    setDocuments(documents.map(document => {
      if (id === document.id) {
        return {
          ...document,
          name
        };
      }
      return document;
    }))
  }

  const toggleFilter = () => {
    setIsFiltered(!isFiltered)
  }

  const handleNameInput = e => {
    setPendingDocument(e.target.value)
  }

  const newDocumentSubmitHandler = () => {
    let doc = document.getElementById('document')
    let docUrl = URL.createObjectURL(doc.files[0])
    let id = Date.now();
    setDocuments([
      {
        name: pendingDocument,
        isSelected: false,
        isEditing: false,
        url: docUrl,
        id
      },
      ...documents
    ],
    setPendingDocument)
  }

  const getTotalDocuments = () => documents.length;

  const getSelectedDocuments = () => documents.reduce((total, document) => document.isSelected ? total + 1 : total, 0);

    const totalDocuments = getTotalDocuments();
    const numberSelected = getSelectedDocuments();
    const numberUnselected = totalDocuments - numberSelected;

    let filteredDocuments = documents.filter(
      (document) => {
        return document.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      }
    );
    return (
      
      <div className="App">
      {
        (user) ?
        <Router>
          <Switch>
          <Route exact={true} path="/">
              <ServiceProviderHomePage />
          </Route>
          <Route path="/service-provider-request">
              <ServiceProviderOwnerDoc />
          </Route>
        </Switch>
        </Router>
        // <OwnerDashboard
        // user={user}
        // onSignOut={signOut}
        // pendingDocument={pendingDocument}
        // newDocumentSubmitHandler={newDocumentSubmitHandler}
        // handleNameInput={handleNameInput}
        // toggleFilter={toggleFilter}
        // isFiltered={isFiltered}
        // totalDocuments={totalDocuments}
        // numberSelected={numberSelected}
        // numberUnselected={numberUnselected}
        // filteredDocuments={filteredDocuments}
        // toggleSelected={toggleSelected}
        // toggleEditing={toggleEditing}
        // updateSearch={updateSearch}
        // search={search}
        // setName={setName}
        // removeDocument={removeDocument} />
        
        // <ServiceProviderOwnerDoc />
        :
        <div className="login">
          <Container>
            <Row>
              <Col />
                <Col xs={10} sm={10} md={12} lg={12}>
                  <div className="container">
                    <Home onSignIn={signIn} />
                  </div>
                </Col>
              <Col />
            </Row>
          </Container>
        </div>
      }
      </div>
    )
}

export default App;
