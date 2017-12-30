import { connect } from 'react-redux';
import ChannelBar from '../components/ChannelBar';
import { setVisibleChannel } from '../actions';

function mapStateToProps(state, ownProps) {
  return { channels: state.channels };
}

function mapDispatchToProps(dispatch, ownProps) { 
  return { onChannelClick: (channel) => dispatch(setVisibleChannel(channel)) }; 
}

const ChannelBarContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChannelBar);

export default ChannelBarContainer;