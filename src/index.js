import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Test from './views/test'
import Home from './views/home'
import Select from './views/select'
import Login from './views/login'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Test} path="/test" />
        <Route exact component={Home} path="/" />
        <Route exact component={Select} path="/select" />
        <Route exact component={Login} path="/login" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
