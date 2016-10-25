import * as types from '../Config/Constants'

const BASE_URL = 'http://115.28.163.165/api'

const received = (type, json) => {
  switch (type){
    case "TOPICS":
      return {
        type: type,
        payload: json
      }
    case "HOT":
      return {
        type: type,
        payload: json
      }
    case "TOPIC":
      return {
        type: type,
        payload: {
          topic: json.topic,
          replies: json.replies
        }
      }
    default:
      return {}
  }
}

export const fetchTopics = options => dispatch => {
  const type = types.TOPICS
  let url = ''
  if (options) {
    if (options.node_name) {
      if (options.node_name === 'hot') {
        url = `${BASE_URL}/topics/hot.json`
      } else if (options.node_name === 'latest') {
        url = `${BASE_URL}/topics/latest.json`
      } else {
        url = `${BASE_URL}/topics/show.json?node_name=${options.node_name}`
      }
    }
  } else {
    url = `${BASE_URL}/topics/hot.json`
  }
  console.log(`fetch url: ${url}`);
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(received(type, json)))
}

export const fetchHot = () => dispatch => {
  const type = types.HOT
  let url = `${BASE_URL}/topics/hot.json`
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(received(type, json)))
}

export const fetchTopic = (id) => dispatch => {
  const type = types.TOPIC
  const results = {'topic': {}, 'replies': []};
  let url = `${BASE_URL}/topics/show.json?id=${id}`
  let repliesUrl = `${BASE_URL}/replies/show.json?topic_id=${id}`
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .then((json) => {
      results.topic = json[0]
      fetch(repliesUrl)
        .then(response => response.json())
        .then((json) => {
          results.replies = json

          dispatch(received(type, results))
        })
    })
}
