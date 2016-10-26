import React, { Component } from 'react'
import classname from 'classnames'
import { Link } from 'react-router'
import '../Stylesheets/Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className="top-navbar">
        <div className="content">
          <div style={{paddingTop:'6px'}}>
            <table width="100%">
              <tbody>
                <tr>
                  <td width='110px' align='left'>
                    <Link to='/'>
                      <img src="https://cdn.v2ex.co/site/logo@2x.png" width="94" height="30"/>
                    </Link>
                  </td>
                  <td width="auto" align="center" style={{paddingTop: '2px'}}>

                  </td>
                  <td width="130px" align="right" style={{paddingTop: '2px'}}>
                    <Link to="/">首页</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/">设置</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/">登出</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
