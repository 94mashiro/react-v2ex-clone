import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Mainbox from '../Components/Mainbox'
import * as actions from '../Actions'

class Main extends Component {
  constructor(props) {
    super(props)
    let tab = this.props.tab || 'programmer'
    // console.log(tab);
    this.props.actions.fetchTopics({node_name: tab})
  }
  render() {
    return (
      <div>
        <Mainbox topics={this.props.topics} click={this.props.actions.fetchTopics}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let topics = state.Topics.payload
  if (topics) {
    return {
      topics: topics
    }
  }
  return {topics:[{}]}
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
