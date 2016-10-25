import * as types from '../Config/Constants'

const RightSidebar = (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {
    case "HOT":
      return {
        hotTopics: action.payload
      }
    default:
      return state
  }
}

export default RightSidebar
