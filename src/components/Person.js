import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return (
    <div className="Person" style={style}>
      <h2 onClick={props.click}>Hello {props.name} I'm {props.age} years old!</h2>
      <input type="text" onChange={props.changed} value={props.name} />
      <p>{props.children}</p>
    </div>
  )
}

export default Radium(Person);
