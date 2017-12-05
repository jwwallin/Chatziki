import React, { Component } from 'react';
import ChatContainer from './containers/ChatContainer';
import ChannelBarContainer from './containers/ChannelBarContainer';
import BottomBar from './containers/BottomBar'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <ChannelBarContainer />
        <ChatContainer />
        <BottomBar />
      </div>
    );
  }
}

export default App;