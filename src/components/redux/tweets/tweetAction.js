// import { INPUT_TWEET } from './tweetStore';
// export const inputTweet = () => {
//   return {
//     type: 'INPUT_TWEET'
//   }
// }
export const ADD_TWEET = "ADD_TWEET";
export const DELETE_TWEET = "DELETE_TWEET";

const curTime = () => {
  return (new Date().toLocaleTimeString());
}

const addTweet = (Tweet) => {
  return {
    type: ADD_TWEET,
    payload: Tweet,
  }
}
const deleteTweet = (TweetId) => {
  return {
    type: DELETE_TWEET,
    payload: {curTime},
  }
}
export {addTweet,deleteTweet}