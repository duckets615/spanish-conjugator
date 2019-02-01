import React from 'react';

const VerbTenses = props => {
  return (
    <div>
      <p>Beginner: Present, Preterite</p>
      <p>
        Intermediate: Beginner + Imperfect, Conditional, Future, Present Perfect
      </p>
      <p>Advanced: All tenses</p>
      <select onChange={props.updateVerbTenses}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate" selected="Intermediate">
          Intermediate
        </option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
  );
};

export default VerbTenses;
