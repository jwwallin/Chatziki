import React, { Component } from 'react';
import ChatContainer from './containers/ChatContainer';
import ChannelBar from './containers/ChannelBar';
import BottomBar from './containers/BottomBar'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <ChannelBar />
        <ChatContainer />
        <BottomBar />
      </div>
    );
  }
}

export default App;