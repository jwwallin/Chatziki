import React, { Component } from 'react';
import Chat from './containers/Chat';
import ChannelBar from './containers/ChannelBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
          <ChannelBar />
          <Chat messages={[]} />
      </div>
    );
  }
}

export default App;