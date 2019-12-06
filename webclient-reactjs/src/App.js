import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { Home, OwnerDashboard, ToggleBar, ServiceProviderHomePage, ServiceProviderOwnerDoc } from './components/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      documents: [],
      isFiltered: false,
      pendingDocument: "",
      search: ""
    }
  }

  // const [user, setUser] = useState(null);
  // const [isFiltered, setIsFiltered] = useState(false);
  // const [documents, setDocuments] = useState([]);
  // const [search, setSearch] = useState("");
  // const [pendingDocument, setPendingDocument] = useState("");

  // useEffect(async () => {
  //   const result = await axios.get(`http://localhost:9005/owner/getdocs`);
  //   const promise = result.then(response => {

  //   })
  //   setDocuments(result.data);
  // });

  componentDidMount() {
     axios.get(`http://localhost:9005/owner/getdocs`).then(res => {
       const res_object = JSON.parse(res)
      if(res_object["message"] === "success") {
        this.setState({ documents: res.data })
      }
    }).catch(error => {
      console.log("Data error")
    })
  }

  // const getDocuments = () => {
  //   axios.get(`/owner/getdocs`).then((res) => {
  //     console.log(res);
  //     this.setState({documents: res.data})
  //   });
  // }
  
  

  //  signIn = (username, password) => {
  //   setUser({
  //     username,
  //     password
  //   })
  // }

   updateSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  //  signOut = () => {
  //   setUser(null)
  // }

   toggleDocumentProperty = (property, id) => {
    this.setState({
      documents: this.state.documents.map(document => {
        if (id === document.id) {
          return {
            ...document,
            [property]: !document[property]
          };
        }
        return document
      })
    })
  }

   toggleSelected = id => {
   this.toggleDocumentProperty("isSelected", id);
  }

   removeDocument = id => {
    this.setState({ documents: this.state.documents.filter(document => id !== document.id) })
  }

   toggleEditing = id => {
    this.toggleDocumentProperty("isEditing", id);
  }

   setName = (name, id) => {
    this.setState({
      documents: this.state.documents.map(document => {
        if(id === document.id) {
          return {
            ...document,
            name
          };
        }
        return document;
      })
    })
  }

   toggleFilter = () => {
    this.setState({ isFiltered: !this.state.isFiltered })
  }

   handleNameInput = e => {
    this.setState({ pendingDocument: e.target.value })
  }

   newDocumentSubmitHandler = () => {
    let doc = document.getElementById('document')
    let docUrl = URL.createObjectURL(doc.files[0])
    let id = Date.now();
    this.setState({
      documents: [
        {
          name: this.state.pendingDocument,
          isConfirmed: false,
          isEditing: false,
          url: docUrl,
          id
        },
        ...this.state.documents
      ],
      pendingDocument: ''
    })
  }

   getTotalDocuments = () => this.state.documents.length;

   getSelectedDocuments = () => this.state.documents.reduce((total, document) => document.isSelected ? total + 1 : total, 0);

     
    render() {
      const totalDocuments = this.getTotalDocuments();
      const numberSelected = this.getSelectedDocuments();
      const numberUnselected = totalDocuments - numberSelected;
 
      let filteredDocuments = this.state.documents.filter(
       (document) => {
         return document.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
       }
     );
    
    return (
      
      <div className="App">
      
        {/* // <Router>
        //   <Switch>
        //   <Route exact={true} path="/">
        //       <ServiceProviderHomePage />
        //   </Route>
        //   <Route path="/service-provider-request">
        //       <ServiceProviderOwnerDoc />
        //   </Route>
        // </Switch>
        // </Router> */}
        <OwnerDashboard
        pendingDocument={this.state.pendingDocument}
        newDocumentSubmitHandler={this.newDocumentSubmitHandler}
        handleNameInput={this.handleNameInput}
        toggleFilter={this.toggleFilter}
        isFiltered={this.state.isFiltered}
        totalDocuments={this.totalDocuments}
        numberSelected={this.numberSelected}
        numberUnselected={this.numberUnselected}
        filteredDocuments={this.filteredDocuments}
        toggleSelected={this.toggleSelected}
        toggleEditing={this.toggleEditing}
        updateSearch={this.updateSearch}
        search={this.state.search}
        setName={this.setName}
        removeDocument={this.removeDocument} />
        
        {/* // <ServiceProviderOwnerDoc /> */}
        {/* <div className="login">
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
        </div> */}
      </div>
    )
    }
}

export default App;
