import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMessageFieldValue, sendMessage } from '../actions';

import './BottomBar.css';

const BottomBar = ({ value, channel, onValueChange, onSend }) => (
  <div className='BottomBar'>
    <input 
      value={value}
      onChange={(event) => onValueChange(event.target.value)} />
    <button onClick={(value, channel) => onSend(value, channel)}>Send</button>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  value: state.messageField, 
  channel: state.visibleChannel
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onValueChange(value) { 
    dispatch(setMessageFieldValue(value));
  }, 
  onSend(message, channel) {
    dispatch(sendMessage(message, channel));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);