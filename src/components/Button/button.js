import React from 'react';
import './button.css';

const Button = props => (
  <button
    id={props.id}
    value={props.value}
    className={`button ${props.className}`}
    onClick={props.handleClick}>
    {props.name}{props.children}
  </button>
)

export default Button;