import React from 'react';
import PropTypes from 'prop-types';

export const LengthSlider = (props) => {
  const handleChange = (event) => {
    const length = Number(event.target.value);
    props.onChange(length)
  }

  return (
  <div className="LengthSlider">
    <label htmlFor="length">Length:</label>
    <input type="range" id="length" name="length"
         min="6" max="20" value={props.passwordLength}
         onChange={handleChange}/>
    <label htmlFor="length">{props.passwordLength}</label>
  </div> )
}

LengthSlider.propTypes = {
  passwordLength: PropTypes.number,
  onChange: PropTypes.func,
}