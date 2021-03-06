import React from 'react';

const VerbTenses = props => {
  return (
    <div className="settings-dropdown">
      <p className="settings-text">Difficulty</p>
      <select onChange={props.updateVerbTenses}>
        <option value='0' defaultValue="Beginner">
          Level One
        </option>
        <option value="1">Level Two</option>
        <option value="2">Level Three</option>
        <option value="3">Level Four</option>
        <option value="4">Level Five</option>
        <option value="5">Level Six</option>
        <option value="6">Level Seven</option>
      </select>
    </div>
  );
};

export default VerbTenses;
