import React, { Component } from 'react';
import {Format} from '../Format';
import '../Stylesheets/TopicInfo.css'

export default class TopicInfo extends Component {

  render() {
    let info = ''
    let hits = ''
    if (this.props.isShow === 'true') {
      info = <span>发布于 { Format.date(this.props.topic.created) }</span>
      hits = <span>{this.props.topic.hits} 次阅读</span>
    }

    return(
      <div className='infos'>
        <a className='separator' href={this.props.topic.node.url}>{this.props.topic.node.title}</a>
          •
        <strong><a href="#" className='separator'>{this.props.topic.member.username}</a></strong>
          •
        <span className='separator'>{Format.date(this.props.topic.created)}</span>
      </div>
    );
  }
}
