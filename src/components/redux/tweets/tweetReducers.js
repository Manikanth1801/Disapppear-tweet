// import { INPUT_TWEET } from './tweetStore';
// const initialState = {
//   Tweets:{id: 1, content: 'it works', date: "" }
// }

// const tweetReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case INPUT_TWEET: return {
//       ...state,
      
//     }
//   }
// }
import { ADD_TWEET, DELETE_TWEET } from './tweetAction';
import {Tweets} from './states'


export let reducer = (state = Tweets, action)=>{
  switch (action.type) {
    case ADD_TWEET: return {
      
    }
    case DELETE_TWEET:
      let newTweets = [...state];
      newTweets=newTweets.filter(Tweet=>Tweet.date !== action.payload)
      return newTweets;
    default: return state;
    
  }
}