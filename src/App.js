import React from 'react';
import TweetCreator from './components/TweetCreator';
import HeaderLocal from './components/HeaderLocal';
import { Provider } from 'react-redux';
import { store } from './components/redux/tweets/tweetStore';


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <HeaderLocal/>
        <TweetCreator />
      </Provider>
    </div>
  );
};
export default App;