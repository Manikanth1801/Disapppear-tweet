import React from 'react';
import { Card } from 'antd';



const DisplayCard = (props) => {

  const tweets = props.Tweets.map((Tweets) =>
  {
    return (
      <React.Fragment>
        <Card title={props.twtName}
          extra={
            <strong action={props.deleteTweet(Tweets.id,Tweets)}>{Tweets.date}</strong>
          }
          style={{ width: 500, margin:'15px' }}>
          <p>{Tweets.content} <br/> </p>
      </Card>
      </React.Fragment>
    );
  });
  return (
    <div className="cardAlign">
      {tweets}
    </div>
  );
}
export default DisplayCard;