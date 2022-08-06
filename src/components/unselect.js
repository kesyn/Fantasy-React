import React from 'react'

import PropTypes from 'prop-types'

import './unselect.css'

const Unselect = (props) => {
  return <div className={`unselect-unselect ${props.rootClassName} `}></div>
}

Unselect.defaultProps = {
  rootClassName: '',
}

Unselect.propTypes = {
  rootClassName: PropTypes.string,
}

export default Unselect
