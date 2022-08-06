import React from 'react'

import PropTypes from 'prop-types'

import './tobbar.css'

const Tobbar = (props) => {
  return (
    <div className={`tobbar-tobbar ${props.rootClassName} `}>
      <div className="tobbar-bisaitab">
        <div className="tobbar-bisai">
          <img
            alt={props.svg_alt}
            src={props.svg_src}
            className="tobbar-bisaiicon"
          />
          <span className="tobbar-bisaitext h2">{props.text}</span>
        </div>
      </div>
      <div className="tobbar-qushitab">
        <div className="tobbar-qushi">
          <img
            alt={props.svg_alt1}
            src={props.svg_src1}
            className="tobbar-qushiicon"
          />
          <span className="tobbar-qushitext h2">{props.text1}</span>
        </div>
      </div>
    </div>
  )
}

Tobbar.defaultProps = {
  rootClassName: '',
  svg_alt: 'svg11526840',
  text1: '趋势',
  svg_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/64da9944-5806-4f75-a6d2-72d7102e0894/fa8802e5-97a6-4298-b585-b6e208927538?org_if_sml=1594',
  text: '比赛',
  svg_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/64da9944-5806-4f75-a6d2-72d7102e0894/ef60b7f3-a3c8-43e6-b6ec-530b247dd359?org_if_sml=1203',
  svg_alt1: 'svg11526858',
}

Tobbar.propTypes = {
  rootClassName: PropTypes.string,
  svg_alt: PropTypes.string,
  text1: PropTypes.string,
  svg_src: PropTypes.string,
  text: PropTypes.string,
  svg_src1: PropTypes.string,
  svg_alt1: PropTypes.string,
}

export default Tobbar
