import React, { Component } from 'react';

import './BottomBar.css';
import { sendMessage } from '../actions';

const BottomBar = ({ value, onValueChange, onSend }) => (
  <div className='BottomBar'>
    <input 
      value={value}
      onChange={(event) => onValueChange(event.target.value)} />
    <button onClick={onSend}>Send</button>
  </div>
);

export default BottomBar;