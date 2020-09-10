// export const INPUT_TWEET = 'INPUT_TWEET'
import { createStore } from 'redux';
import { reducer } from './tweetReducers';

export const store = createStore(reducer);