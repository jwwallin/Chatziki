import { connect } from 'react-redux';
import BottomBar from '../components/BottomBar';
import { setMessageFieldValue, sendMessage } from '../actions';

function mapStateToProps(state, ownProps) {
  return { value: state.messageField, channel: state.visibleChannel }
}

function mapDispatchToProps(dispatch, ownProps) {
  return { 
    onValueChange: (value) => dispatch(setMessageFieldValue(value)), 
    onSend: (message, channel) => { 
      dispatch(sendMessage(message, channel));
    }
  };
}

const BottomBarContainer = connect(mapStateToProps, mapDispatchToProps)(BottomBar);

export default BottomBarContainer;
