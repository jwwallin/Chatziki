import { connect } from 'react-redux';
import BottomBar from '../components/BottomBar';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return { onSubmit: () => '' };
}

const BottomBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBar);

export default BottomBarContainer;