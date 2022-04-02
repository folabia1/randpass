import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export const TextBox = (props) => {
  return (
    <div className="TextBox">
      <span className="PasswordText">{props.text}</span>
    </div>
  )
}

TextBox.propTypes = {
  text: PropTypes.string,
}