import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer.js';


import { createStore, applyMiddleware } from 'redux';
import {  Provider } from 'react-redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
const store = applyMiddleware(socketIoMiddleware)(createStore)(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.log('new client state', store.getState());
});


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root'));
registerServiceWorker();
