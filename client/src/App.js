import React, { Component } from 'react';
import Chat from './components/Chat';
import ChannelBar from './components/ChannelBar';
import BottomBar from './components/BottomBar'
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