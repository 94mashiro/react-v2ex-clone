import React, { Component } from 'react'
import Lists from './Lists'
import { Link } from 'react-router'
import '../Stylesheets/Mainbox.css'

class Mainbox extends Component {

  handleClick(name) {
    this.props.click({node_name:name})
  }

  render() {
    return (
        <div className="panel panel-default topic-lists">
          <div className="panel-heading text-left">
            <Link className="tab" to="?tab=programmer" onClick={()=>this.handleClick('programmer')}>程序员</Link>
            <Link className="tab" to="?tab=python" onClick={()=>this.handleClick('python')}>Python</Link>
            <Link className="tab" to="?tab=javascript" onClick={()=>this.handleClick('js')}>JavaScript</Link>
            <Link className="tab" to="?tab=create" onClick={()=>this.handleClick('create')}>分享创造</Link>
            <Link className="tab" to="?tab=nodejs" onClick={()=>this.handleClick('nodejs')}>Node.js</Link>
            <Link className="tab" to="?tab=jobs" onClick={()=>this.handleClick('jobs')}>酷工作</Link>
            <Link className="tab" to="?tab=hot" onClick={()=>this.handleClick('hot')}>最热</Link>
            <Link className="tab" to="?tab=latest" onClick={()=>this.handleClick('latest')}>最新</Link>
          </div>
          <Lists topics={this.props.topics}/>
        </div>
    );
  }
}

export default Mainbox
