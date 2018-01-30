import React from 'react';
import './Button.css';

const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);

export default Button;