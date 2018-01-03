import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';
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

const mapStateToProps = (state, ownProps) => ({
  messages: state.channels[state.visibleChannel].messages
});

export default connect(mapStateToProps)(Chat);