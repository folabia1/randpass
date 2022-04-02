import React from 'react';
import PropTypes from 'prop-types';

export const IncludeButton = (props) => {
  const handleClick = () => {
    props.onClick(props.name)
  }

  return <button style={props.buttonColor} className="IncludeButton" onClick={handleClick}>{props.name}</button>;
}

IncludeButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool
}