import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

import './ChannelBar.css';

const ChannelBar = ({ channels, onChannelClick }) => (
  <div className='ChannelBar'>
    {Object.keys(channels).map(
      (channel) => <Button 
        label={'卐' + channel} 
        onClick={() => onChannelClick(channel)} />
    )}
  </div>
)

export default ChannelBar;

ChannelBar.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChannelClick: PropTypes.func.isRequired
}
