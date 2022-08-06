import React from 'react'

import PropTypes from 'prop-types'

import './roomfree.css'

const Roomfree = (props) => {
  return (
    <div className={`roomfree-freeroom ${props.rootClassName} `}>
      <div className="roomfree-mianjibi">
        <div className="roomfree-mianjinbititle">
          <span className="roomfree-mianjinbitext h3">{props.text1}</span>
          <div className="roomfree-risai">
            <span className="roomfree-risaitext p">{props.text3}</span>
          </div>
        </div>
        <span className="roomfree-date p">{props.text}</span>
      </div>
      <div className="roomfree-tiyanbtn button">
        <span className="roomfree-tiyantext h3">{props.text2}</span>
      </div>
    </div>
  )
}

Roomfree.defaultProps = {
  tiyan: () => {},
  text: '10/15 10:00',
  rootClassName1: '',
  text1: '免金币体验',
  rootClassName: '',
  text2: '体验',
  asdfas: () => {},
  text3: '日赛',
}

Roomfree.propTypes = {
  tiyan: PropTypes.func,
  text: PropTypes.string,
  rootClassName1: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  asdfas: PropTypes.func,
  text3: PropTypes.string,
}

export default Roomfree
