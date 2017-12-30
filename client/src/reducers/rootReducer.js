import { combineReducers } from 'redux';

import { channels } from './channels';
import { visibleChannel } from './visibleChannel';
import { messageField } from './messageField';
import { user } from './user';
import { users } from './users';

const rootReducer = combineReducers({
  channels,
  visibleChannel,
  messageField,
  user,
  users
});

export default rootReducer;
