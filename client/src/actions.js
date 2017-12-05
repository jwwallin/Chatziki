/*
 * action types
 */

export const SET_VISIBLE_CHANNEL = 'SET_VISIBLE_CHANNEL';
export const SEND_MESSAGE = 'SEND_MESSAGE';

/*
* action creators
*/

export function setVisibleChannel(channel) {
  return { type: SET_VISIBLE_CHANNEL, channel };
}

export function sendMessage(message) {
  return { type: SEND_MESSAGE, message }
}