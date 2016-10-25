import React, { Component } from 'react'
import classname from 'classnames'
import { Link } from 'react-router'
import '../Stylesheets/Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/"><img src="https://cdn.v2ex.co/site/logo@2x.png" width="94" height="30"/></Link>
            </div>
              <ul className="nav navbar-nav navbar-right nav-right-btn">
                <a href="#">首页</a>
                <a href="#">设置</a>
                <a href="#">登出</a>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
}
