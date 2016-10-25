import * as types from '../Config/Constants'

const Topics = (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {
    case "TOPICS":
      return {
        type: action.type,
        payload: action.payload
      }
    default:
      return state
  }
}

export default Topics
