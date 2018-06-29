import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <h2 onClick={props.click}>Hello {props.name} I'm {props.age} years old!</h2>
      <input type="text" onChange={props.changed} value={props.name} />
      <p>{props.children}</p>
    </div>
  )
}

export default Person;
