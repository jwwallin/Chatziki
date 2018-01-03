import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/rootReducer.js';

const configureStore = () => {
  const socket = io('http://localhost:8000');
  const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
  const store = applyMiddleware(socketIoMiddleware)(createStore)(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configureStore;