import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Roomfree from '../components/roomfree'
import Roombasic from '../components/roombasic'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Fantasy</title>
        <meta property="og:title" content="Fantasy" />
      </Helmet>
      <div className="home-content">
        <div className="home-top">
          <div className="home-userinfo">
            <img
              src="/playground_assets/avatar-200h.png"
              className="home-avatar"
            />
            <span className="home-nickname h3">Umax Zhao</span>
          </div>
          <div className="home-coin">
            <div className="home-num">
              <span className="home-coinnum h3">45,576</span>
            </div>
            <img
              src="/playground_assets/coin_icon.svg"
              className="home-coinicon"
            />
          </div>
          <img
            alt="image"
            src="/playground_assets/logo.svg"
            className="home-slogon"
          />
        </div>
        <div className="home-selectgametab">
          <div className="home-switch">
            <div className="home-selectable">
              <img
                src="/playground_assets/add_icon.svg"
                className="home-selecticon"
              />
              <span className="home-selecttext h3">可选比赛</span>
            </div>
            <div className="home-selected">
              <img
                src="/playground_assets/selected_icon.svg"
                className="home-selectedicon"
              />
              <span className="home-selectedtext h3">已选比赛</span>
            </div>
          </div>
          <div className="home-zhanji">
            <img
              src="/playground_assets/record_icon.svg"
              className="home-zhanjiicon"
            />
            <span className="home-zhanjitext h3">战绩</span>
          </div>
        </div>
        <div className="home-roomlist">
          <Roomfree rootClassName="roomfree-root-class-name"></Roomfree>
          <Link to="/select" className="home-navlink">
            <Roombasic
              rootClassName="roombasic-root-class-name"
              className="home-component1"
            ></Roombasic>
          </Link>
        </div>
      </div>
      <div className="home-toptab">
        <div className="home-game">
          <div className="home-container1">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/64da9944-5806-4f75-a6d2-72d7102e0894/fa8802e5-97a6-4298-b585-b6e208927538?org_if_sml=1594"
              className="tab_icon"
            />
            <span className="home-gametext h2 tab_text">比赛</span>
          </div>
        </div>
        <div className="home-trend">
          <div className="home-container2">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/64da9944-5806-4f75-a6d2-72d7102e0894/ef60b7f3-a3c8-43e6-b6ec-530b247dd359?org_if_sml=1203"
              className="tab_icon"
            />
            <span className="home-trendtext h2 tab_text">趋势</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
