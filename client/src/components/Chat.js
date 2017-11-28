import { Component } from 'react';
import openSocket from 'socket.io-client';

export default class Chat extends Component {
  componentDidMount() {
    const socket = openSocket('http://localhost:8000');
    socket.on('success', () => console.log('The socket works!'))
  }

  render() {
    return (
      'Look at the console'
    );
  }
}