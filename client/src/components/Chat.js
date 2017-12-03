import React, { Component } from 'react';

import Message from '../components/Message';
import './Chat.css';

export default class Chat extends Component {
  render() {
    var messages = [];
    Object.keys(this.props).forEach((key) => messages.push(this.props[key]));

    return (
      <div className='Chat'>
        {messages.map((message) => <Message username={message.senderId} content={message.content} />)}
      </div>
    );
  }
}