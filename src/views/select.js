import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Unselectcard from '../components/unselectcard'
import Playercard from '../components/playercard'
import './select.css'

const Select = (props) => {
  return (
    <div className="select-container">
      <Helmet>
        <title>Select - Fantasy</title>
        <meta property="og:title" content="Select - Fantasy" />
      </Helmet>
      <div className="select-selectplayerpopup">
        <div className="select-container01">
          <div className="select-container02">
            <div className="select-container03">
              <input
                type="text"
                placeholder="placeholder"
                className="select-searchbox p input"
              />
              <img
                alt="image"
                src="/playground_assets/search.svg"
                className="select-searchicon"
              />
              <select className="select-anpingjunpaixu">
                <option value="Option 1" selected>
                  按平均分排序
                </option>
                <option value="Option 2">按所需能量</option>
                <option value="Option 3">按场均上场时间</option>
              </select>
            </div>
            <div className="select-playerlist">
              <div className="select-header">
                <span className="select-qiuyuantext p2">球员</span>
                <span className="select-bisaitext p2">比赛</span>
                <div className="select-container04">
                  <span className="select-changjuntext p2">
                    <span>场均</span>
                    <br></br>
                    <span>上场时间</span>
                  </span>
                  <div className="select-fantasyscore">
                    <span className="select-pingjunfentext p2">
                      <span>Fantasy</span>
                      <br></br>
                      <span>平均分</span>
                    </span>
                    <img
                      alt="annotationsvg1854072"
                      src="/playground_assets/f5c8b34d-1496-4d5c-942e-382ecd87c8d6-wjpl.svg"
                      className="select-pingjunfenicon"
                    />
                  </div>
                </div>
                <span className="select-tourutext p2">投入能量</span>
              </div>
              <div className="select-player1">
                <div className="select-playerinfo">
                  <div className="select-playerface">
                    <img
                      alt="image"
                      src="/playground_assets/2544-200h.webp"
                      className="select-playeravatar"
                    />
                    <div className="select-container05">
                      <img
                        alt="WLakerssvgI183317021894"
                        src="/playground_assets/team_logo_2.svg"
                        className="select-teamicon"
                      />
                    </div>
                  </div>
                  <div className="select-playerinfo1">
                    <span className="select-playername p2">
                      <span className="select-text06">勒布朗</span>
                      <br></br>
                      <span className="select-text08">詹姆斯</span>
                    </span>
                    <div className="select-positionnumber">
                      <div className="select-position">
                        <span className="select-positiontext nP2">PF</span>
                      </div>
                      <span className="select-playernum nP">6</span>
                    </div>
                  </div>
                </div>
                <div className="select-game">
                  <div className="select-container06">
                    <img
                      alt="teamlogosvg1833165"
                      src="/playground_assets/team_logo_2.svg"
                      className="select-teamleftlogo"
                    />
                    <div className="select-teamsplit"></div>
                    <img
                      alt="teamlogosvg1833166"
                      src="/playground_assets/9a4a2044-6a47-4de0-8d67-92785e0ede72-whyq.svg"
                      className="select-teamrightlogo"
                    />
                  </div>
                  <span className="select-gametime nP">9:00</span>
                </div>
                <div className="select-data">
                  <div className="select-container07">
                    <span className="select-changjunvalue n3_2">10.2</span>
                    <span className="select-pingjunfenvalue n3_1">45.8</span>
                  </div>
                  <img
                    alt="datasvg1853590"
                    src="/playground_assets/data%20-%20svg.svg"
                    className="select-dataimg"
                  />
                </div>
                <div className="select-playerselected">
                  <div className="select-container08">
                    <span className="select-yixuanzetext p">已选择</span>
                  </div>
                  <div className="select-container09">
                    <img
                      alt="Vector38281833156"
                      src="/playground_assets/engine.svg"
                      className="select-nengliangselectedicon"
                    />
                    <span className="select-nengliangselected n3_2">20</span>
                  </div>
                </div>
              </div>
              <div className="select-player2">
                <div className="select-playerinfo2">
                  <div className="select-playerface1">
                    <img
                      alt="image"
                      src="/playground_assets/2544-200h.webp"
                      className="select-image"
                    />
                    <div className="select-container10">
                      <img
                        alt="WLakerssvgI183317021894"
                        src="/playground_assets/team_logo_2.svg"
                        className="select-w-lakerssvg"
                      />
                    </div>
                  </div>
                  <div className="select-playerinfo3">
                    <span className="select-text09 p2">
                      <span className="select-text10">勒布朗</span>
                      <br></br>
                      <span className="select-text12">詹姆斯</span>
                    </span>
                    <div className="select-positionnumber1">
                      <div className="select-position1">
                        <span className="select-text13 nP2">PF</span>
                      </div>
                      <span className="select-text14 nP">6</span>
                    </div>
                  </div>
                </div>
                <div className="select-game1">
                  <div className="select-container11">
                    <img
                      alt="teamlogosvg1833165"
                      src="/playground_assets/team_logo_2.svg"
                      className="select-teamlogosvg"
                    />
                    <div className="select-container12"></div>
                    <img
                      alt="teamlogosvg1833166"
                      src="/playground_assets/9a4a2044-6a47-4de0-8d67-92785e0ede72-whyq.svg"
                      className="select-teamlogosvg1"
                    />
                  </div>
                  <span className="select-text15 nP">9:00</span>
                </div>
                <div className="select-data1">
                  <div className="select-container13">
                    <span className="select-text16 n3_2">10.2</span>
                    <span className="select-text17 n3_1">45.8</span>
                  </div>
                  <img
                    alt="datasvg1853590"
                    src="/playground_assets/data%20-%20svg.svg"
                    className="select-datasvg"
                  />
                </div>
                <div className="select-action">
                  <div className="select-container14">
                    <span className="select-text18 n2">
                      <span>+</span>
                    </span>
                  </div>
                  <div className="select-container15">
                    <img
                      alt="Vector38281833156"
                      src="/playground_assets/engine.svg"
                      className="select-svg"
                    />
                    <span className="select-text20 n3_2">20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="select-closebtn">
            <img
              alt="image"
              src="/playground_assets/back.svg"
              className="select-closeicon"
            />
          </div>
          <div className="select-container16">
            <div className="select-tobbar">
              <div className="select-kongweitab">
                <span className="h2 tab_text h3">控卫</span>
              </div>
              <div className="select-fenweitab">
                <span className="select-fenweitext h3">分卫</span>
              </div>
              <div className="select-xiaoqiantab">
                <span className="select-xiaoqiantext h3">小前</span>
              </div>
              <div className="select-daqiantab">
                <span className="select-daqiantext h3">大前</span>
              </div>
              <div className="select-zhongfengtab">
                <span className="select-zhongfengtext h3">中锋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="select-playerselect">
        <div className="select-court">
          <img
            alt="courtsvg1833305"
            src="/playground_assets/ee9ce75e-a577-422d-a463-41a0ec289922-f5ak.svg"
            className="select-bgimg"
          />
          <span className="select-fenweitext1 p">分卫</span>
          <span className="select-kongweitext1 p">控卫</span>
          <span className="select-daqiantext1 p">大前</span>
          <span className="select-xiaoqiantext1 p">
            <span>扬尼斯</span>
            <br></br>
            <span>安特托昆博</span>
          </span>
          <span className="select-zhongfengtext1 p">中锋</span>
          <div className="select-kongwei-container">
            <Unselectcard
              text="SG"
              rootClassName="unselectcard-root-class-name"
            ></Unselectcard>
          </div>
          <div className="select-kongwei-container1">
            <Unselectcard
              text="PG"
              rootClassName="unselectcard-root-class-name2"
            ></Unselectcard>
          </div>
          <div className="select-daqian-container">
            <Unselectcard
              text="PF"
              rootClassName="unselectcard-root-class-name3"
            ></Unselectcard>
          </div>
          <div className="select-xiaoqian-container">
            <Playercard rootClassName="playercard-root-class-name"></Playercard>
          </div>
          <div className="select-zhongfeng-container">
            <Unselectcard rootClassName="unselectcard-root-class-name1"></Unselectcard>
          </div>
        </div>
        <div className="select-wodepingjunfen">
          <span className="select-score n1">35.5</span>
          <span className="select-wodepingjunfentext font_bold h3">
            <span>我的当前阵容</span>
            <br></br>
            <span>平均分</span>
          </span>
          <img
            alt="annotationsvg1833095"
            src="/playground_assets/f5c8b34d-1496-4d5c-942e-382ecd87c8d6-wjpl.svg"
            className="select-annotationicon"
          />
        </div>
        <div className="select-keyongnengliang">
          <img
            alt="Vector38321833101"
            src="/playground_assets/engine.svg"
            className="select-keyongnengliangicon"
          />
          <span className="select-keyongnengliangvalue n3_2">30</span>
          <span className="select-keyongnengliangtext font_bold p">
            可用能量
          </span>
        </div>
        <div className="select-suiji">
          <div className="select-suijizhenrong">
            <img
              alt="promptsvg1853588"
              src="/playground_assets/66beac27-fea9-45fd-816b-45d286a914e8-pq2.svg"
              className="select-suijiizhenrongicon"
            />
            <span className="select-suijizhenrongtext p2">随机阵容</span>
          </div>
          <div className="select-suijiimg">
            <img
              alt="diceiconsvg1833543"
              src="/playground_assets/dice-200w.png"
              className="select-suijiicon"
            />
          </div>
        </div>
        <span className="select-jiezhixuanrentext p">24:52:21 后截止选人</span>
      </div>
      <div className="select-content">
        <div className="select-awardsinfo">
          <div className="select-container17">
            <div className="select-benzhoujiangchi">
              <span className="select-benzhoujiangchitext h3 font_bold">
                本周奖池
              </span>
              <div className="select-container18">
                <div className="select-container19">
                  <span className="select-jiangchinum n2">9,148,900</span>
                  <img
                    alt="image"
                    src="/playground_assets/coin_icon.svg"
                    className="select-largecoinicon"
                  />
                </div>
              </div>
              <span className="select-canyurenshu p2">11,500人参与</span>
            </div>
            <div className="select-zhoubangpanel">
              <div className="select-top">
                <div className="select-zhoubang">
                  <img
                    alt="image"
                    src="/playground_assets/ranking_icon.svg"
                    className="select-zhoubangicon"
                  />
                  <span className="select-zhoubangtext font_bold h3">周榜</span>
                </div>
                <img
                  alt="image"
                  src="/playground_assets/more_icon.svg"
                  className="select-zhoubangbtn"
                />
              </div>
              <div className="select-bottom">
                <img
                  alt="image"
                  src="/playground_assets/prize_60x60-200h.png"
                  className="select-zongqiumaoicon"
                />
                <div className="select-container20">
                  <span className="select-zongguanjunqiumao p">总冠军球帽</span>
                  <span className="select-diyiming p2">第1名</span>
                </div>
              </div>
            </div>
          </div>
          <div className="select-progress">
            <div className="select-progress1">
              <div className="select-progress2">
                <div className="select-progress3">
                  <span className="select-shiwujiang p2">1-3名实物奖</span>
                  <img
                    alt="image"
                    src="/playground_assets/down_arrow.svg"
                    className="select-progressicon"
                  />
                </div>
                <span className="select-guafenjiangchijinbi p2">
                  前20%瓜分奖池金币
                </span>
                <img
                  alt="image"
                  src="/playground_assets/down_arrow.svg"
                  className="select-progress2img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="select-playerlist1">
          <span className="select-wodezhenrongtext">我的阵容</span>
          <div className="select-container21">
            <div className="select-header1">
              <span className="select-qiuyuantext1 p2">球员</span>
              <span className="select-bisaitext1 p2">比赛</span>
              <div className="select-container22">
                <span className="select-changjuntext1 p2">
                  <span>场均</span>
                  <br></br>
                  <span>上场时间</span>
                </span>
                <div className="select-fantasyscore1">
                  <span className="select-pingjunfentext1 p2">
                    <span>Fantasy</span>
                    <br></br>
                    <span>平均分</span>
                  </span>
                  <img
                    alt="annotationsvg1854072"
                    src="/playground_assets/f5c8b34d-1496-4d5c-942e-382ecd87c8d6-wjpl.svg"
                    className="select-annotationicon1"
                  />
                </div>
              </div>
              <span className="select-tourunengliangtext p2">投入能量</span>
            </div>
            <div className="select-playercard">
              <div className="select-playerinfo4">
                <div className="select-playerface2">
                  <img
                    alt="image"
                    src="/playground_assets/2544-200h.webp"
                    className="select-playeravatar1"
                  />
                  <div className="select-container23">
                    <img
                      alt="WLakerssvgI183317021894"
                      src="/playground_assets/team_logo_2.svg"
                      className="select-teamicon1"
                    />
                  </div>
                </div>
                <div className="select-playerinfo5">
                  <span className="select-playername1 p2">
                    <span className="select-text32">勒布朗</span>
                    <br></br>
                    <span className="select-text34">詹姆斯</span>
                  </span>
                  <div className="select-positionnumber2">
                    <div className="select-position2">
                      <span className="select-positiontext1 nP2">PF</span>
                    </div>
                    <span className="select-playernum1 nP">6</span>
                  </div>
                </div>
              </div>
              <div className="select-game2">
                <div className="select-container24">
                  <img
                    alt="teamlogosvg1833165"
                    src="/playground_assets/team_logo_2.svg"
                    className="select-teamleftlogo1"
                  />
                  <div className="select-teamsplit1"></div>
                  <img
                    alt="teamlogosvg1833166"
                    src="/playground_assets/9a4a2044-6a47-4de0-8d67-92785e0ede72-whyq.svg"
                    className="select-teamrightlogo1"
                  />
                </div>
                <span className="select-gametime1 nP">9:00</span>
              </div>
              <div className="select-data2">
                <div className="select-container25">
                  <span className="select-changjunvalue1 n3_2">10.2</span>
                  <span className="select-pingjunfenvalue1 n3_1">45.8</span>
                </div>
                <img
                  alt="datasvg1853590"
                  src="/playground_assets/data%20-%20svg.svg"
                  className="select-dataimg1"
                />
              </div>
              <div className="select-action1">
                <div className="select-container26">
                  <span className="select-qiankexiugai">
                    <span>00:12:35</span>
                    <br></br>
                    <span>前可修改</span>
                  </span>
                </div>
                <div className="select-container27">
                  <img
                    alt="Vector38281833156"
                    src="/playground_assets/engine.svg"
                    className="select-nengliangselectedicon1"
                  />
                  <span className="select-nengliangtext n3_2">20</span>
                </div>
              </div>
            </div>
          </div>
          <div className="select-container28">
            <div className="select-listtitle">
              <span className="select-yiwansaiqiuyuantext p2">已完赛球员</span>
              <span className="select-bisaitext2 p2">比赛</span>
              <div className="select-container29">
                <div className="select-container30">
                  <span className="select-shishishujutext p2">
                    <span>实时数据</span>
                  </span>
                  <img
                    alt="annotationsvg1854072"
                    src="/playground_assets/f5c8b34d-1496-4d5c-942e-382ecd87c8d6-wjpl.svg"
                    className="select-annotationicon2"
                  />
                </div>
                <span className="select-jinrijifentext p2">今日积分</span>
              </div>
            </div>
            <div className="select-playercard1">
              <div className="select-playerinfo6">
                <div className="select-playerface3">
                  <img
                    alt="image"
                    src="/playground_assets/2544-200h.webp"
                    className="select-playeravatar2"
                  />
                  <div className="select-container31">
                    <img
                      alt="WLakerssvgI183317021894"
                      src="/playground_assets/team_logo_2.svg"
                      className="select-teamicon2"
                    />
                  </div>
                </div>
                <div className="select-playerinfo7">
                  <span className="select-playername2 p2">
                    <span>勒布朗</span>
                    <br></br>
                    <span>詹姆斯</span>
                  </span>
                  <div className="select-positionnumber3">
                    <div className="select-position3">
                      <span className="select-positionnum nP2">PF</span>
                    </div>
                    <span className="select-playernum2 nP">6</span>
                  </div>
                </div>
              </div>
              <div className="select-game3">
                <div className="select-container32">
                  <img
                    alt="teamlogosvg1833165"
                    src="/playground_assets/team_logo_2.svg"
                    className="select-leftteamlogo"
                  />
                  <div className="select-teamsplit2"></div>
                  <img
                    alt="teamlogosvg1833166"
                    src="/playground_assets/9a4a2044-6a47-4de0-8d67-92785e0ede72-whyq.svg"
                    className="select-rightteamlogo"
                  />
                </div>
                <div className="select-container33">
                  <span className="select-leftscore nP">130</span>
                  <div className="select-container34">
                    <span className="select-diyijie p2">第一节</span>
                    <span className="select-gametime2 nP2">9:00</span>
                  </div>
                  <span className="select-rightscore nP">27</span>
                </div>
              </div>
              <div className="select-data3">
                <div className="select-data4">
                  <div className="select-add">
                    <span className="select-todayjifenscore n3_1">
                      <span>17.4</span>
                    </span>
                  </div>
                </div>
                <div className="select-data5">
                  <div className="select-data6">
                    <span className="p2">
                      <span>得分</span>
                    </span>
                    <span className="p2">
                      <span>篮板</span>
                    </span>
                    <span className="p2">
                      <span>助攻</span>
                    </span>
                    <span className="p2">
                      <span>抢断</span>
                    </span>
                    <span className="p2">
                      <span>盖帽</span>
                    </span>
                    <span className="p2">
                      <span>失误</span>
                    </span>
                  </div>
                  <div className="select-data7">
                    <span className="select-defenvalue nP">7</span>
                    <span className="select-lanbanvalue nP">2</span>
                    <span className="select-zhugongvalue nP">0</span>
                    <span className="select-qiangduanvalue nP">0</span>
                    <span className="select-gaimaovalue nP">3</span>
                    <span className="select-shiwuvalue nP">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="select-bottombar">
        <span className="select-tourutext1 p">投入金币倍数 3/10</span>
        <div className="select-submitbtn">
          <span className="select-submittext btn">提交阵容</span>
        </div>
        <div className="select-tourunum">
          <span className="select-val n3_2">300</span>
        </div>
        <div className="select-subbtn">
          <span className="select-subtext n2">-</span>
        </div>
        <div className="select-addbtn">
          <span className="select-addtext n2">+</span>
        </div>
        <img
          alt="image"
          src="/playground_assets/coin_icon.svg"
          className="select-coinicon"
        />
      </div>
      <div className="select-calendarbar">
        <div className="select-container35">
          <Link to="/" className="select-navlink">
            <img
              src="/playground_assets/back.svg"
              loading="eager"
              className="select-backbtnicon"
            />
          </Link>
          <div className="select-weekly">
            <div className="select-date1">
              <span className="select-data1text nP">M</span>
              <img
                alt="Vector38391271763"
                src="/playground_assets/up_arrow.svg"
                className="select-data1icon"
              />
            </div>
            <div className="select-date2">
              <span className="select-data2text nP">T</span>
              <img
                alt="Vector38391271763"
                src="/playground_assets/up_arrow.svg"
                className="select-data2icon"
              />
            </div>
            <div className="select-date3">
              <span className="select-data3text nP">W</span>
              <img
                alt="Vector38391271763"
                src="/playground_assets/up_arrow.svg"
                className="select-data3icon"
              />
            </div>
            <div className="select-date4">
              <span className="select-data4text nP">T</span>
              <img
                alt="Vector38391271763"
                src="/playground_assets/up_arrow.svg"
                className="select-data4icon"
              />
            </div>
            <div className="select-date5">
              <span className="select-data5text nP">F</span>
              <img
                alt="Vector38391271763"
                src="/playground_assets/up_arrow.svg"
                className="select-data5icon"
              />
            </div>
            <div className="select-date6">
              <span className="select-data6text nP">S</span>
              <img
                alt="Vector38391271763"
                src="/playground_assets/up_arrow.svg"
                className="select-data6icon"
              />
            </div>
            <div className="select-date7">
              <span className="select-data7text nP">S</span>
              <img
                alt="Vector38391271763"
                src="/playground_assets/up_arrow.svg"
                className="select-data7icon"
              />
            </div>
          </div>
          <img
            alt="calendariconsvg1833299"
            src="/playground_assets/8f6cb4b3-69a9-4955-944d-b5e6f00b1de8-71no.svg"
            className="select-calendaricon"
          />
        </div>
      </div>
    </div>
  )
}

export default Select
