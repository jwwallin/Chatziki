import { connect } from 'react-redux';
import Chat from '../components/Chat';

function mapStateToProps(state, ownProps) {
  return { messages: state.channels[state.visibleChannel].messages }
}

function mapDispatchToProps(dispatch, ownProps) { return {}; }

const ChatContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Chat);

export default ChatContainer;