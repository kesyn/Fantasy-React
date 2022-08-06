import React from 'react'

import { Helmet } from 'react-helmet'

import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Helmet>
        <title>test - Fantasy</title>
        <meta property="og:title" content="test - Fantasy" />
      </Helmet>
    </div>
  )
}

export default Test
