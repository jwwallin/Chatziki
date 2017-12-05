import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { channels } from './channels';
import { visibleChannel } from './visibleChannel';
import { user } from './user';
import { users } from './users';

const rootReducer = combineReducers({
  channels,
  visibleChannel,
  user,
  users,
  form: formReducer
});

export default rootReducer;
