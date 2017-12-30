import React, { Component } from 'react';

import './BottomBar.css';
import { sendMessage } from '../actions';

const BottomBar = ({ value, channel, onValueChange, onSend }) => (
  <div className='BottomBar'>
    <input 
      value={value}
      onChange={(event) => onValueChange(event.target.value)} />
    <button onClick={(value, channel) => onSend(value, channel)}>Send</button>
  </div>
);

export default BottomBar;