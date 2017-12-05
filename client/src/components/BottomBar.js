import React, { Component } from 'react';

import InputField from './InputField';
import './BottomBar.css';

const BottomBar = ({ onSubmit }) => (
  <div className='BottomBar'>
    <InputField name='MessageField' onSubmit={() => ''} submitLabel='Send' />
  </div>
);

export default BottomBar;