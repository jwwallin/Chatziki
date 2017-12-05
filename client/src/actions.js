/*
 * action types
 */

export const SET_VISIBLE_CHANNEL = 'SET_VISIBLE_CHANNEL';

 /*
  * action creators
  */

export function setVisibleChannel(channel) {
  return { type: SET_VISIBLE_CHANNEL, channel };
}