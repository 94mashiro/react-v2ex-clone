import React, { Component } from 'react'
import '../Stylesheets/UserInfo.css'

class UserInfo extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="top">
            <img src="https://cdn.v2ex.co/avatar/7136/18d9/66275_large.png?m=1434957451" className="img-circle img-width-50"/>
            <a href="#" className="bigger" style={{marginLeft:'10px'}}>Mashiro</a>
            <div style={{marginTop:'10px'}}>
              <div className="inlineBlock" style={{width:'33%'}}>
                <a href="#">
                  <span className="bigger">0</span>
                  <div className="sep3"></div>
                  <span className="fade">节点收藏</span>
                </a>
              </div>
              <div className="inlineBlock center" style={{width:'34%'}}>
                <a href="#">
                  <span className="bigger">3</span>
                  <div className="sep3"></div>
                  <span className="fade">主题收藏</span>
                </a>
              </div>
              <div className="inlineBlock" style={{width:'33%'}}>
                <a href="#">
                  <span className="bigger">5</span>
                  <div className="sep3"></div>
                  <span className="fade">特别关注</span>
                </a>
              </div>
            </div>
            <div className="bottomBorder"></div>
            <div>
              <img src="https://www.v2ex.com/static/img/flat_compose.png" width="32"/>
              <a href="#" style={{marginLeft:'10px'}}>创作新主题</a>
            </div>
            <div className="bottomBorder"></div>
            <div style={{marginBottom:'-8px'}}>
              <a href="#">0 条未读提醒</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo
