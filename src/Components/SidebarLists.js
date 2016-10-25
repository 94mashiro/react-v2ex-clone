import React, { Component } from 'react'
import { Link } from 'react-router'
import '../Stylesheets/Lists.css'

class SidebarLists extends Component {
  render() {
    let listItems = []
    const fetchTopic = this.props.fetchTopic
    if ('id' in this.props.topics[0]) {
      listItems = this.props.topics.map(function (topic) {
        return (
          <div className="media topic" key={topic.id}>
            <a className="media-left" href="#">
              <span className="center-span"><img className='img-circle img-width-24' src={topic.member.avatar_large} role="presentation" /></span>
            </a>
            <div className="media-body">
              <a href={`/t/${topic.id}`} className='title'>{topic.title}</a>
            </div>
          </div>
        );
      });
    }
    return (
      <div className='panel-body'>
        {listItems||''}
      </div>
    );
  }
}

export default SidebarLists
