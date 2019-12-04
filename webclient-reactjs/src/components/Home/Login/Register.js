import React from 'react';

const Register = ({ changeView, handleSubmit }) => {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     email: "",
  //     password: "",
  //     password_confirmation: "",
  //     registrationErrors: ""
  //   }
  // }



  // const handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  // handleSubmit = e => {
  //   const { email, password, password_confirmation } = this.state;
  //
  //   axios.post(
  //     "http://localhost:3000/sessions",
  //     {
  //       user: {
  //         email: email,
  //         password: password,
  //         password_confirmation: password_confirmation
  //       }
  //     },
  //     { withCredentials: true }
  //   ).then(res => {
  //     if (res.data.status === "created") {
  //       this.props.handleSuccessfulAuth(res.data)
  //     }
  //   }).catch(error => {
  //     console.log("registration error", error)
  //   });
  //   e.preventDefault();
  // }

  return (
    <div className="base-container">
    <h1>MyPass</h1>
    <div className="header">Register</div>
      <div className="content">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="header">Sign Up!</h2>
          <fieldset>
            <legend>Create Account</legend>
              <div className="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" required/>
              </div>
              <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" required/>
              </div>
              <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" required/>
              </div>
          </fieldset>
          <button className="btn">Submit</button>
          <button className="btn" type="button" onClick={ () => changeView("logIn")}>Have an Account?</button>
        </form>
      </div>

    </div>
  )
}
export default Register;
