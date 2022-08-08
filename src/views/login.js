import React from 'react'

import { Helmet } from 'react-helmet'

import Login from '../components/login'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Fantasy</title>
        <meta property="og:title" content="Login - Fantasy" />
      </Helmet>
      <Login rootClassName="login-root-class-name"></Login>
    </div>
  )
}

export default Login
