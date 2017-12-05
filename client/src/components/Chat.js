import React, { Component } from 'react';

import Message from '../components/Message';
import './Chat.css';

const Chat = ({ messages }) => (
  <div className='Chat'>
    {Object.keys(messages).map(
      key => <Message 
        username={messages[key].senderId} 
        content={messages[key].content} />
    )}
  </div>
);

export default Chat;