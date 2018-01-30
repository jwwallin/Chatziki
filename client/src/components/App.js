import React from 'react';
import Chat from './Chat';
import ChannelBar from './ChannelBar';
import BottomBar from './BottomBar'
import './App.css';

const App = () => (
  <div className='App'>
    <ChannelBar />
    <Chat />
    <BottomBar />
  </div>
)

export default App;