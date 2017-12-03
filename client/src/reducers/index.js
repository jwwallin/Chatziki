import { combineReducers } from 'redux';

import { channels } from './channels';
import { user } from './user';
import { users } from './users';

const rootReducer = combineReducers({
  channels,
  user,
  users
});

export default rootReducer;
