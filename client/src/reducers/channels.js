// Create an initial #general channel
const initialState = {
  general: {
    channelId: 0,
    name: 'general',
    messages: {
      0: {
        senderId: 0,
        timestamp: 0,
        content: "Welcome to #general!"
      }
    }
  }
};

export function channels(state=initialState, action) {
  switch (action.type) {
    case 'message':
      const newState = Object.assign({}, state);
      newState[action.channel].messages[action.key] = action.message;
      return newState;
    default:
      return state;
  }
}
