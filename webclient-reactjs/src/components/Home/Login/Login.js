import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  // handleLogin = (data) => {
  //   this.setState({
  //     data: data
  //   })
  // }

  // handleSuccessfulAuth = (data) => {
  //   // this.props.handleLogin(data);
  //   this.props.history.push("/");
  // }

  handleSignIn = (e) => {
    e.preventDefault();
    let username = this.refs.username
    let password = this.refs.password
    this.props.onSignIn(username, password)
  }

  // handleSubmit = e => {
  //   const { email, password } = this.state;
  
  //   axios.post(
  //     "http://localhost:9005/auth/login",
  //     {
  //      data: {
  //        email: email,
  //        password: password
  //      },    
  //     }
  //   ).then(res => {
  //     console.log(res);
  //     // this.handleSuccessfulAuth(res.data)
  //     this.props.history.push("/");
  //   }).catch(error => {
  //     console.log("loggin error", error)
  //   });
  //   e.preventDefault();
  // }

  render() {
    return (
        <div className="base-container" ref={this.props.containerRef}>
          <h1>MyPass</h1>
        <div className="header">Login</div>
          <div className="content">
            <form className="form" onSubmit={this.handleSignIn}>
              <Row>
                <Col xs={8} sm={8} md={12} lg={12}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    name="email"
                    placeholder="username"
                    onChange={this.handleChange}
                    required
                     />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={8} sm={8} md={12} lg={12}>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChange}
                    required />
                  </div>
                </Col>
              </Row>
                <input type="submit" className="btn" value="Login" />
                <button className="btn" type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
            </form>
          </div>
        </div>
    )
  }
}
export default Login;
