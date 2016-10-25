import React, { Component } from 'react'
import TopicInfo from './TopicInfo'
import '../Stylesheets/Markdown.css'
import '../Stylesheets/Content.css'

class Content extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const isEmpty = (this.props.topic.id == -1)
    return (
      <div className="topic">
        {!isEmpty &&
          <div className="panel panel-default topic-wrap">
            <div className="panel-heading media">
              <div className="text-right float-right">
                <img src={this.props.topic.member.avatar_large} className="img-circle" alt=""/>
              </div>
              <div className="text-left media-body">
                <a href="/">V2EX</a>
                <span className="chevron">&nbsp;&nbsp;›&nbsp;&nbsp;</span>
                <a href="/go/share">{this.props.topic.node.title}</a>
                <h1 className="topic-title">{this.props.topic.title}</h1>
                <div className="small-gray"><TopicInfo topic={this.props.topic} /></div>
              </div>
            </div>
            <div className="panel-body markdown">
              <span dangerouslySetInnerHTML={{ __html: this.props.topic.content_rendered}} />
            </div>
            <div className="panel-footer">
              <a href="#" className="pf">加入收藏</a>
              <a href="#" className="pf">Tweet</a>
              <a href="#" className="pf">Weibo</a>
              <a href="#" className="pf">忽略主题</a>
              <a href="#" className="pf">感谢</a>
            </div>
          </div>
        }
        {isEmpty && <h1>Loading....</h1>}
      </div>
    );
  }
}

export default Content
