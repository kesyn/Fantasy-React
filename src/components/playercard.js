import React from 'react'

import PropTypes from 'prop-types'

import './playercard.css'

const Playercard = (props) => {
  return (
    <div className={`playercard-playercard ${props.rootClassName} `}>
      <div className="playercard-unselectplayer">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="playercard-playeravatar"
        />
        <span className="playercard-player34 n2">
          <span className="playercard-text"></span>
          <span className="playercard-text1">34</span>
        </span>
        <div className="playercard-position">
          <span className="playercard-positiontext nP2">{props.text1}</span>
        </div>
      </div>
      <div className="playercard-unselborder"></div>
      <div className="playercard-unselbadge">
        <img
          alt={props.svg_alt}
          src={props.svg_src}
          className="playercard-unselbadgeicon"
        />
        <span className="playercard-unselbadgetext n3_2">{props.text}</span>
      </div>
    </div>
  )
}

Playercard.defaultProps = {
  svg_alt: 'Vector38321833101',
  image_alt: 'image',
  svg_src: '/playground_assets/engine.svg',
  text1: 'SF',
  text: '30',
  image_src: '/playground_assets/203507-200h.webp',
  rootClassName: '',
}

Playercard.propTypes = {
  svg_alt: PropTypes.string,
  image_alt: PropTypes.string,
  svg_src: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Playercard
