import React from 'react';
import PropTypes from 'prop-types';
import copyImage from '../assets/icons8-copy-60.png';
import '../App.css';

export const CopyToClipboardButton = (props) => {
  const  handleClick = async (event) => {
    // save password to clipboard
    alert(`Copied "${props.text}"`);
    return await navigator.clipboard.writeText(props.text);
  }

  return (
    <img src={copyImage} alt="reload icon" onClick={handleClick}/>
  )
}

CopyToClipboardButton.propTypes = {
  text: PropTypes.string,
}