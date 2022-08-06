import React from 'react'

import PropTypes from 'prop-types'

import './unselectcard.css'

const Unselectcard = (props) => {
  return (
    <div className={`unselectcard-unselectcard ${props.rootClassName} `}>
      <img
        alt={props.addsvg_alt}
        src={props.addsvg_src}
        className="unselectcard-addplayericon"
      />
      <div className="unselectcard-addplayerposition">
        <span className="unselectcard-addplayertext nP2">{props.text}</span>
      </div>
    </div>
  )
}

Unselectcard.defaultProps = {
  addsvg_alt: 'addsvg1833053',
  text: 'C',
  rootClassName: '',
  addsvg_src: '/playground_assets/add_white.svg',
}

Unselectcard.propTypes = {
  addsvg_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  addsvg_src: PropTypes.string,
}

export default Unselectcard
