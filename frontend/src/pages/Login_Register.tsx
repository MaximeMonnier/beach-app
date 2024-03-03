import React, { Component } from 'react'
import Register from '../components/Register'
import Connexion from '../components/Connexion'

export class Login_Register extends Component {
  render() {
    return (
      <div className='container-form'>
        <Register />
        <div className="bar"></div>
        <Connexion/>
      </div>
    )
  }
}

export default Login_Register