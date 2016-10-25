import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserInfo from '../Components/UserInfo'
import Hot from '../Components/Hot'
import * as actions from '../Actions'

class RightSidebar extends Component {

  constructor(props) {
    super(props)
    this.props.actions.fetchHot()
  }

  render() {
    return (
      <div>
        <UserInfo />
        <Hot topics={this.props.hotTopics} hideHot={this.props.hideHot}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let hotTopics = state.RightSidebar.hotTopics
  if (hotTopics) {
    return {
      hotTopics
    }
  }
  return {hotTopics:[{}]}
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar)
