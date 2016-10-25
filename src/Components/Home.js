import React, { Component } from 'react'
import Main from '../Containers/Main'
import RightSidebar from '../Containers/RightSidebar'
class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row margin-xs">
          <div className="col-md-9 no-padding-xs">
            <Main query={this.props.location.query}/>
          </div>
          <div className="col-md-3 no-padding-xs">
            <RightSidebar hideHot={false}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
