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
  },
  random: {
    channelId: 0,
    name: 'random',
    messages: {
      0: {
        senderId: 0,
        timestamp: 0,
        content: "Welcome to #random!"
      }
    }
  }
};

export function channels(state=initialState, action) {
  switch (action.type) {
    case 'message':
      const newState = JSON.parse(JSON.stringify(state));
      newState[action.channel].messages[action.key] = action.message;
      return newState;
    default:
      return state;
  }
}
