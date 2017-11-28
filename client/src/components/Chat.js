import React, { Component } from 'react';
import openSocket from 'socket.io-client';

import Message from './Message';
import './Chat.css';

const socket = openSocket('http://localhost:8000');

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    socket.on('success', () => console.log('The socket works!'));

    socket.on('message', (data) => {
      console.log("incometh data: " + data);
      var newMessages = this.state.messages.slice();
      newMessages.push(data);
      this.setState({ messages: newMessages });
    });
  }

  render() {
    const messages = this.state.messages.map(message => {
      return <Message username={message.user} content={message.content} />
    });

    return (
      <div className='Chat'>
        {messages}
      </div>
    );
  }
}