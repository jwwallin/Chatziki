import React, { Component } from 'react';
import Chat from './Chat';
import ChannelBar from './ChannelBar';
import BottomBar from './BottomBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ChannelBar />
        <Chat />
        <BottomBar />
      </div>
    );
  }
}

export default App;