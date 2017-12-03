import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import Chat from './components/Chat';
import rootReducer from './reducers/index.js';
import './App.css';

const socket = io('http://localhost:8000');
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
const store = applyMiddleware(socketIoMiddleware)(createStore)(rootReducer);
store.subscribe(() => {
  console.log('new client state', store.getState());
});

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <Chat />
        </Provider>
      </div>
    );
  }
}

export default App;
