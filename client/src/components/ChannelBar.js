import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibleChannel } from '../actions';
import Button from './Button';

import './ChannelBar.css';

const ChannelBar = ({ channels, onChannelClick }) => (
  <div className='ChannelBar'>
    {Object.keys(channels).map(
      (channel) => <Button 
        label={'卐' + channel} 
        onClick={() => onChannelClick(channel)} />
    )}
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  channels: state.channels
});

const mapDispatchToProps = (dispatch, ownProps) => ({ 
  onChannelClick(channel) {
    dispatch(setVisibleChannel(channel)) 
  }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelBar);
