import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Login/Register';

export const Home = ({ onSignIn }) => {

  const [currentView, setCurrentView] = useState("signUp")

  const changeView = (view) => {
    setCurrentView(view)
  }

    switch(currentView) {
      case "signUp":
        return (
          <Register changeView={changeView} />
        )
        break
      case "logIn":
        return (
          <Login onSignIn={onSignIn} changeView={changeView} />
        )
        break
      case "PWReset":
        return (
          <form>
          <h2>Reset Password</h2>
          <fieldset>
            <legend>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label for="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
        )
      default:
        break
    }
}
