import React from 'react';

const Person = (props) => {
  return (
    <div>
      <h2 onClick={props.click}>Hello {props.name} I'm {props.age} years old!</h2>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default Person;