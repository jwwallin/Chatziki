import React, { Component } from 'react';
import ChatContainer from './containers/ChatContainer';
import ChannelBarContainer from './containers/ChannelBarContainer';
import BottomBarContainer from './containers/BottomBarContainer'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <ChannelBarContainer />
        <ChatContainer />
        <BottomBarContainer />
      </div>
    );
  }
}

export default App;