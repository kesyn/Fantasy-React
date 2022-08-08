import React from 'react'

import PropTypes from 'prop-types'

import './login.css'

const Login = (props) => {
  return (
    <div className={`login-frame2043 ${props.rootClassName} `}>
      <img
        alt={props.Rectangle519_alt}
        src={props.Rectangle519_src}
        className="login-rectangle519"
      />
      <div className="login-frame229">
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="login-textinput input"
        />
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className="login-textinput1 input"
        />
        <div className="login-frame2041">
          <img
            alt={props.Rectangle1504_alt}
            src={props.Rectangle1504_src}
            className="login-rectangle1504"
          />
          <span className="login-text">{props.text3}</span>
        </div>
      </div>
      <span className="login-text1">
        <span className="login-text2">注册</span>
        <span className="login-text3">NBA ID</span>
        <span className="login-text4">并同意</span>
        <span className="login-text5">隐私条款</span>
      </span>
      <input type="checkbox" checked="true" className="login-checkbox" />
      <div onClick={props.loginClicked} className="login-frame96">
        <div className="login-rectangle1512"></div>
        <img
          alt={props.Frame_alt}
          src={props.Frame_src}
          className="login-frame"
        />
        <span className="login-text6">{props.text1}</span>
      </div>
      <span className="login-text7">{props.text}</span>
      <div className="login-group480962583">
        <div className="login-group">
          <img
            alt={props.Group_alt}
            src={props.Group_src}
            className="login-group1"
          />
          <img
            alt={props.Group_alt1}
            src={props.Group_src1}
            className="login-group2"
          />
        </div>
        <img alt={props.svg_alt} src={props.svg_src} className="login-svg" />
        <span className="login-text8">{props.text2}</span>
      </div>
    </div>
  )
}

Login.defaultProps = {
  Rectangle519_src:
    '/playground_assets/a8342fcb-f2b2-447b-8846-85ab3ee0c419-us1.svg',
  Rectangle519_alt: 'Rectangle519102126213',
  text: '一键注册/登录NBA ID',
  textinput_placeholder: 'placeholder',
  textinput_placeholder1: 'placeholder',
  svg_src: '/playground_assets/a288bb41-7492-4102-826e-63cbfa3517b8-ce6g.svg',
  svg_alt: '1102126290',
  text2: 'Fantasy by',
  Rectangle1504_src:
    '/playground_assets/9b8f459e-ea4e-438a-b30e-94e4ffaa49b4-tt09.svg',
  Rectangle1504_alt: 'Rectangle1504102126286',
  text3: '发送验证码',
  Group_src: '/playground_assets/a980deaa-6a35-4b4a-a807-7682ae956670-ifk7.svg',
  Group_alt: 'Group102126256',
  Group_src1: '/playground_assets/ffa8dad2-7945-4c8d-8331-788a5cb2d111-1ri.svg',
  Group_alt1: 'Group102126258',
  rootClassName: '',
  text1: '登录NBA ID',
  Frame_alt: 'Frame102126278',
  Frame_src: '/playground_assets/b3cd6fa5-5c0e-4b21-950e-bb682dc6ec0c-xp0o.svg',
  loginClicked: () => {},
}

Login.propTypes = {
  Rectangle519_src: PropTypes.string,
  Rectangle519_alt: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  svg_src: PropTypes.string,
  svg_alt: PropTypes.string,
  text2: PropTypes.string,
  Rectangle1504_src: PropTypes.string,
  Rectangle1504_alt: PropTypes.string,
  text3: PropTypes.string,
  Group_src: PropTypes.string,
  Group_alt: PropTypes.string,
  Group_src1: PropTypes.string,
  Group_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  Frame_alt: PropTypes.string,
  Frame_src: PropTypes.string,
  loginClicked: PropTypes.func,
}

export default Login
