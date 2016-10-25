import React, { Component } from 'react';
import {Format} from '../Format';
import '../Stylesheets/Markdown.css';
import '../Stylesheets/Replies.css';

class Replies extends Component {

  render() {
    var count = this.props.replies.length
    let listItems = this.props.replies.map(function (reply) {
      return (
        <div className="media topic" key={reply.id}>
          <a className="media-left" href="#">
            <img className='img-circle img-width-50' src={reply.member.avatar_normal} role="presentation" />
          </a>
          <div className="media-body">
            <div className='info'>
              <span className='name'>{ reply.member.username }</span>
              <span className='time light-gray-color'>{ Format.date(reply.created) }</span>
            </div>
            <div className='content markdown'>
              <span dangerouslySetInnerHTML={{ __html: reply.content_rendered}} />
            </div>
          </div>
          <div className='media-right count'>
          </div>
        </div>
      );
    });
    return (
      <div className='panel panel-default replies-wrap topic-lists'>
        <div className='panel-heading'>
          <p className='light-gray-color'>共收到 {count} 条回复</p>
        </div>
        <div className='panel-body'>
          {listItems}
        </div>
      </div>
    );
  }
}

export default Replies
