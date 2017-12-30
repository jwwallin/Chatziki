import { SET_MESSAGE_FIELD_VALUE } from '../actions';

export function messageField(state='', action) {
  switch (action.type) {
    case SET_MESSAGE_FIELD_VALUE:
      return action.value;
    default:
      return state;
  }
}