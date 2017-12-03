import { combineReducers } from 'redux';

import { channels } from './channels';
import { visibleChannel } from './visibleChannel';
import { user } from './user';
import { users } from './users';

const rootReducer = combineReducers({
  channels,
  visibleChannel,
  user,
  users
});

export default rootReducer;
