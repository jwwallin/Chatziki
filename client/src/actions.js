/*
 * action types
 */

export const SET_VISIBLE_CHANNEL = 'SET_VISIBLE_CHANNEL';

export const SET_MESSAGE_FIELD_VALUE = 'SET_MESSAGE_FIELD_VALUE';

export const SEND_MESSAGE = 'server/message';

 /*
  * action creators
  */

export function setVisibleChannel(channel) {
  return { type: SET_VISIBLE_CHANNEL, channel };
}

export function setMessageFieldValue(value) {
  return { type: SET_MESSAGE_FIELD_VALUE, value };
}

export function sendMessage(message, channel) {
  return { type: SEND_MESSAGE, data: { message, channel } };
}