import React, { useState, useEffect } from 'react';
import Date from './Date';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import DisplayCard from './DisplayCard';



const handleSubmit = (e, Tweets, setTweets, Text, setText, date, date1,) => {
  e.preventDefault();
  date1 = date.toString();
  const id = (Tweets.length) ? Tweets[Tweets.length - 1].id + 1 : 0;
  setTweets([...Tweets, { id: id, content: Text, date:date1}])
  setText("");
  
}





const TweetCreator = () => {

  // useEffect(() => {
    
  // }, []);



  const [Tweets, setTweets] = useState([
    { id: 1, content: 'Default Tweet', date: "27th Tuesday September 2044 10:10:08 GMT+0530" }
  ]);
  const [Text, setText] = useState('');
  const [date, setdate] = useState([]);
  let date1;
  
  const deleteTweet = (id,Tweets) => {
    console.log(id);
    // ((typeof date) === (typeof sysDate)) ? console.log("balle balle") : console.log("nhi yarrr");  
    const interval = setInterval(() => {
      const sysDate = window.Date();
      console.log((typeof date) === (typeof sysDate));    
    }, 1000);
    return () => clearInterval(interval); 
  }



  return (
    <React.Fragment>
      <form className="tweetClass" onSubmit={(e)=>handleSubmit(e,Tweets,setTweets,Text,setText,date,date1)}>
        <Input size="large" prefix={<UserOutlined />}
          placeholder="#tweet" value={Text} onChange={(e)=>setText(e.target.value)}/>
        <Date onChange={value => setdate(value)} />
        <button className="bTweet" type="submit" id="tBut">
          Tweet
          </button>
      </form>
      <DisplayCard Tweets={Tweets} twtName="Someone Tweets" deleteTweet={deleteTweet}/>
    </React.Fragment>
  ); 
}
export default TweetCreator;