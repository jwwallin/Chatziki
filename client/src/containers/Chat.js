import React, { Component } from 'react';

import Message from '../components/Message';
import './Chat.css';

export default class Chat extends Component {
  render() {
    const messages = this.props.messages.map(message => {
      return <Message username={message.user} content={message.content} />
    });

    return (
      <div className='Chat'>
        {messages}
      </div>
    );
  }
}