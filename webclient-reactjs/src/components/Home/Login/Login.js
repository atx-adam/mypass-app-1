import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
class Login extends Component {

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleLogin = (data) => {
    this.setState({
      user: data
    })
  }

  handleSuccessfulAuth = (data) => {
    this.props.handleLogin(data);
    this.props.history.push("/");
  }

  handleSignIn = (e) => {
    e.preventDefault();
    let username = this.refs.username
    let password = this.refs.password
    this.props.onSignIn(username, password)
  }

  handleSubmit = e => {
    const { email, password } = this.state;
  
    axios.post(
      "http://localhost:9005/auth/login",
      {
       
        email: email,
        password: password
          
        
      },
      { withCredentials: true }
    ).then(res => {
      console.log(res)
      // if (res.data.logged_in) {
      //   this.props.handleSuccessfulAuth(res.data)
      // }
    }).catch(error => {
      console.log("loggin error", error)
    });
    e.preventDefault();
  }

  render() {
    return (
        <div className="base-container" ref={this.props.containerRef}>
          <h1>MyPass</h1>
        <div className="header">Login</div>
          <div className="content">
            <form className="form" onSubmit={this.handleSubmit}>
              <Row>
                <Col xs={8} sm={8} md={12} lg={12}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"

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

                    placeholder="password"
                    onChange={this.handleChange}
                    required />
                  </div>
                </Col>
              </Row>
                <input type="submit" className="btn" value="Login" onSubmit={this.handleSubmit} />
                <button className="btn" type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
            </form>
          </div>
        </div>
    )
  }
}
export default Login;
