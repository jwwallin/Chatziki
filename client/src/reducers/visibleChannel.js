import { SET_VISIBLE_CHANNEL } from '../actions';

export function visibleChannel(state='general', action) {
  switch (action.type) {
    case SET_VISIBLE_CHANNEL:
      return action.channel 
    default:
      return state;
  }
}
