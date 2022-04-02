import React from 'react';
import PropTypes from 'prop-types';
import refreshImage from '../assets/icons8-refresh-60.png'
import '../App.css';

export const ResetPasswordButton = (props) => {
  const handleClick = () => {
    props.onClick();
  }

  return (
    <img src={refreshImage} alt="reload icon" onClick={handleClick}/>
  )
}

ResetPasswordButton.propTypes = {
  onClick: PropTypes.func,
}