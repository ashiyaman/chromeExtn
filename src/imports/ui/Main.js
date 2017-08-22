import Unsplash from 'unsplash-js';
import React from 'react';
import Todo from './Todo';
import QuoteBox from './QuoteBox';
import CurrentTime from './DisplayTime';
import Weather from './Weather';

const unsplash = new Unsplash({
        applicationId: "1d5987396c54a3c2807f2c4f3a57648da2c4a70c0961df5b5d4217d9888b683f",
        secret : "d32093f35dceab540fef4e4b0febe380a0a309829c0a2a8106e4a0e191446024",
        callbackUrl : "urn:ietf:wg:oauth:2.0:oob"
    });


export default class Main extends React.Component{

render(){
    return(
        <div className="container">
          <div className="space-between">
            <div>Links</div>
            <Weather />
          </div>
          <div>
            <CurrentTime />
            <Todo/>
          </div>
          <div className="space-between">
            <div>Settings</div>
            <QuoteBox/>
            <div>Todo List</div>
          </div>
        </div>
    );
}
}
