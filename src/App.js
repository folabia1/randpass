import React, { useState } from 'react';
import './App.css';
import { PasswordArea } from './components/PasswordArea.js';
import { InclusionSet } from './components/InclusionSet.js';
import { LengthSlider } from './components/LengthSlider.js';

function App() {
  const characterSets = {
    "Uppercase":          "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "Lowercase":          "abcdefghijklmnopqrstuvwxyz",
    "Numbers":            "0123456789",
    "Special Characters": "!@€£#$%^&*()-+_={}:;<>,.?~"
  };
  let characterSetNames = Object.getOwnPropertyNames(characterSets);

  // set initial state of isSelected to false for every character set except first two
  const [ isSelected, setIsSelected ] = useState(() => {
    let initial = {};
    characterSetNames.forEach((characterSetName, index) => { initial[characterSetName] = (index <= 1) });
    return initial;
  });

  const [ passwordLength, setPasswordLength ] = useState(12);

  // determine whether given character set is the only remaining set selected
  const isOnlySetRemaining = (characterSetName) => {
    const numButtonsOn = Object.values(isSelected).filter(buttonOn => buttonOn === true).length;
    return (numButtonsOn === 1 && isSelected[characterSetName]);
  }

  // selects or deselects given character set, if allowed
  const updateSelectedSets = (characterSetName) => {
    if (!isOnlySetRemaining(characterSetName)) {
      setIsSelected(prevIsSelected => {
        return ({
          ...prevIsSelected,
          [characterSetName]: !prevIsSelected[characterSetName],
        })
      });  
    }
  }

  return (
    <div className="App">
      <h1>RAND<span id="red-text">PASS</span></h1>
      <p className="tagline">Make your next password safer than your last</p>
      <PasswordArea characterSets={characterSets} isSelected={isSelected} passwordLength={passwordLength} />

      <div className="divider"></div>

      <p>Include:</p>
      <InclusionSet characterSetNames={characterSetNames} onClick={updateSelectedSets} isSelected={isSelected} />
      <LengthSlider passwordLength={passwordLength} onChange={length => setPasswordLength(length)} />
    </div>
  );
}

export default App;
