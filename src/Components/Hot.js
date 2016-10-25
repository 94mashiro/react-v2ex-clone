import React, { Component } from 'react'
import SidebarLists from './SidebarLists'
import '../Stylesheets/SidebarLists.css'

class Hot extends Component {
  render() {
    return (
      <div>
        {!this.props.hideHot &&
          <div className="cell">
            <div className="panel panel-default topic-lists">
              <div className="panel-heading text-left">
                <p className="fade">今日热议主题</p>
              </div>
              <div className="panel-body">
                <SidebarLists topics={this.props.topics} />
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Hot
