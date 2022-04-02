import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextBox } from './TextBox.js'
import { ResetPasswordButton } from './ResetPasswordButton.js';
import { CopyToClipboardButton } from './CopyToClipboardButton.js';
import '../App.css';


export const PasswordArea = (props) => {
  const [ password, setPassword ]  = useState("");
  const updatePassword = () => {
    let availableCharacters = "";
    Object.keys(props.characterSets).forEach((charSetName) => {
      availableCharacters += props.isSelected[charSetName] ? props.characterSets[charSetName] : "";
    });
    
    let partialPassword = "";
    for (let i=0; i<props.passwordLength; i++) {
      partialPassword += availableCharacters[Math.floor(Math.random()*availableCharacters.length)]
    }
    setPassword(partialPassword);
  }

  useEffect(updatePassword, [props.characterSets, props.isSelected, props.passwordLength]);

  return (
    <div className="PasswordArea">
      <CopyToClipboardButton text={password}/>
      <TextBox text={password}/>
      <ResetPasswordButton onClick={updatePassword}/>
    </div>
  )
}

PasswordArea.propTypes = {
  characterSets: PropTypes.object,
  isSelected: PropTypes.object,
  passwordLength: PropTypes.number
}