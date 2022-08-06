import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Fantasy</title>
        <meta property="og:title" content="Login - Fantasy" />
      </Helmet>
      <div className="login-frame2043">
        <img
          alt="Rectangle519102126213"
          src="/playground_assets/a8342fcb-f2b2-447b-8846-85ab3ee0c419-us1.svg"
          className="login-rectangle519"
        />
        <div className="login-frame229">
          <input
            type="text"
            placeholder="placeholder"
            className="login-textinput input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="login-textinput1 input"
          />
          <div className="login-frame2041">
            <img
              alt="Rectangle1504102126286"
              src="/playground_assets/9b8f459e-ea4e-438a-b30e-94e4ffaa49b4-tt09.svg"
              className="login-rectangle1504"
            />
            <span className="login-text">发送验证码</span>
          </div>
        </div>
        <span className="login-text1">
          <span className="login-text2">注册</span>
          <span className="login-text3">NBA ID</span>
          <span className="login-text4">并同意</span>
          <span className="login-text5">隐私条款</span>
        </span>
        <input type="checkbox" checked="true" className="login-checkbox" />
        <div className="login-frame96">
          <img
            alt="Rectangle1512102126277"
            src="/playground_assets/4962645c-8dbd-40dd-94d9-46a233bd76d5-x29w.svg"
            className="login-rectangle1512"
          />
          <img
            alt="Frame102126278"
            src="/playground_assets/b3cd6fa5-5c0e-4b21-950e-bb682dc6ec0c-xp0o.svg"
            className="login-frame"
          />
          <span className="login-text6">登录NBA ID</span>
        </div>
        <span className="login-text7">一键注册/登录NBA ID</span>
        <div className="login-group480962583">
          <div className="login-group">
            <img
              alt="Group102126256"
              src="/playground_assets/a980deaa-6a35-4b4a-a807-7682ae956670-ifk7.svg"
              className="login-group1"
            />
            <img
              alt="Group102126258"
              src="/playground_assets/ffa8dad2-7945-4c8d-8331-788a5cb2d111-1ri.svg"
              className="login-group2"
            />
          </div>
          <img
            alt="1102126290"
            src="/playground_assets/a288bb41-7492-4102-826e-63cbfa3517b8-ce6g.svg"
            className="login-svg"
          />
          <span className="login-text8">Fantasy by</span>
        </div>
      </div>
    </div>
  )
}

export default Login
