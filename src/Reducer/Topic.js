import * as types from '../Config/Constants'

const Topic = (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {
    case "TOPIC":
      return {
        topic: action.payload.topic,
        replies: action.payload.replies
      }
    default:
      return state
  }
}

export default Topic
