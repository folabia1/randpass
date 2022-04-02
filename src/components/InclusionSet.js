import React, { useState, useEffect } from 'react';
import {IncludeButton} from './IncludeButton.js';
import PropTypes from 'prop-types';


export const InclusionSet = (props) => {
  const [ buttonColors, setButtonColors ] = useState({});
  const updateButtonColors = () => {
    let initial = {};
    Object.keys(props.isSelected).forEach((characterSetName, index) => {
      let style = { 
        backgroundColor: props.isSelected[characterSetName] ? "red" : "#F8F8F8",
        color: props.isSelected[characterSetName] ? "white" : "black"
      };
      initial[characterSetName] = style;
    });
    setButtonColors(initial);
  }
  useEffect(updateButtonColors, [props.characterSetNames, props.onClick, props.isSelected]);

  const handleClick = (name) => {
    props.onClick(name)
  }

  return (
    <div className="InclusionSet">
      {props.characterSetNames.map(characterSetName => 
        <IncludeButton
          name={characterSetName}
          key={characterSetName}
          onClick={handleClick}
          isSelected={props.isSelected[characterSetName]}
          buttonColor={buttonColors[characterSetName]}
        />
      )}
    </div>
  ) 
}

InclusionSet.propTypes = {
  characterSetNames: PropTypes.array,
  onClick: PropTypes.func,
  isSelected: PropTypes.object
}