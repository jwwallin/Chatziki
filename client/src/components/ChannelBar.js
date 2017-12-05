import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

import './ChannelBar.css';

export default class ChannelBar extends Component {
  render () {
    return (
      <div className='ChannelBar'>
        {Object.keys(this.props.channels).map(
          (channel) => <Button 
            label={'卐' + channel} 
            onClick={() => this.props.onChannelClick(channel)} />
        )}
      </div>
    );
  }
}

ChannelBar.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChannelClick: PropTypes.func.isRequired
}
