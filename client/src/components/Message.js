import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <div>
        <div className='message-title'>
          {this.props.username}
        </div>
        <div className='message-content'>
          {this.props.content}
        </div>
      </div>
    );
  }
}