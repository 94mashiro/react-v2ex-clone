import React, { Component } from 'react'
import { Link } from 'react-router'
import TopicInfo from './TopicInfo'
import '../Stylesheets/Lists.css'

class Lists extends Component {
  render() {
    let listItems = []
    if ('id' in this.props.topics[0]) {
      listItems = this.props.topics.map(function (topic) {
        return (
          <div className="media topic" key={topic.id}>
            <a className="media-left" href="#">
              <img className='img-circle img-width-50' src={topic.member.avatar_normal} role="presentation" />
            </a>
            <div className="media-body">
              <Link to={`/t/${topic.id}`} className='title'>{topic.title}</Link>
              <TopicInfo topic={topic}></TopicInfo>
            </div>
            <div className='media-right count'>
              <span className='badge'>{topic.replies}</span>
            </div>
          </div>
        );
      });
    }
    return (
      <div className='panel-body'>
        {listItems}
      </div>
    );
  }
}

export default Lists
