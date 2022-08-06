import React from 'react'

import PropTypes from 'prop-types'

import './roombasic.css'

const Roombasic = (props) => {
  return (
    <div className={`roombasic-roombasic ${props.rootClassName} `}>
      <div className="roombasic-info">
        <div className="roombasic-title">
          <div className="roombasic-name">
            <img
              alt={props.mergeRectangle39731svg_alt}
              src={props.team_icon}
              className="roombasic-titleicon"
            />
            <span className="roombasic-titletext h3">{props.text2}</span>
          </div>
          <span className="roombasic-date p">{props.text}</span>
        </div>
        <div className="roombasic-awards">
          <div className="roombasic-left">
            <div className="roombasic-roomtag">
              <span className="roombasic-risai p">{props.text5}</span>
            </div>
            <span className="roombasic-awardtitle p2">{props.text3}</span>
            <div className="roombasic-data">
              <div className="roombasic-progress"></div>
            </div>
          </div>
          <div className="roombasic-awardimg"></div>
        </div>
      </div>
      <div className="roombasic-joinroombtn">
        <div className="roombasic-joinroomimg"></div>
        <div className="roombasic-coin">
          <span className="roombasic-touru p">{props.text1}</span>
          <div className="roombasic-coinbtn">
            <div className="roombasic-num">
              <span className="roombasic-iconnum h3">{props.text4}</span>
            </div>
            <img
              alt={props.mergeGroup480962536svg_alt}
              src={props.mergeGroup480962536svg_src}
              className="roombasic-coinicon"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Roombasic.defaultProps = {
  text: '10/15 10:00',
  text4: '500',
  mergeGroup480962536svg_alt: 'mergeGroup480962536svg11526778',
  mergeGroup480962536svg_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/64da9944-5806-4f75-a6d2-72d7102e0894/f28a55d8-202e-4980-8953-31968937926e?org_if_sml=1220',
  rootClassName1: '',
  text3: '第1名库里球衣,前20%瓜分奖池',
  text1: '投入0/10',
  mergeRectangle39731svg_alt: 'mergeRectangle39731svg11526757',
  rootClassName: '',
  text5: '日赛',
  text2: '鹏友的梦幻1阵',
  team_icon:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/64da9944-5806-4f75-a6d2-72d7102e0894/452b5981-0a40-4d40-9304-b783c88d5c3f?org_if_sml=11093',
}

Roombasic.propTypes = {
  text: PropTypes.string,
  text4: PropTypes.string,
  mergeGroup480962536svg_alt: PropTypes.string,
  mergeGroup480962536svg_src: PropTypes.string,
  rootClassName1: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  mergeRectangle39731svg_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  team_icon: PropTypes.string,
}

export default Roombasic
