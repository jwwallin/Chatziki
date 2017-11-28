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

    socket.on('message', (data) => {
      console.log("incometh data: " + data);
      var newMessages = this.state.messages.slice();
      newMessages.push(data);
      this.setState({ messages: newMessages });
    });
  }

  componentDidMount() {
    socket.on('success', () => console.log('The socket works!'));
    console.log("Mounted!");
  }

  render() {
    const messages = this.state.messages.map((message, i) => {
      return <Message username={i} content={message} />
    });

    return (
      <div className='Chat'>
        {messages}
      </div>
    );
  }
}