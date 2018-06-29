import React, { Component } from 'react';
import Person from './components/Person';
import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: "per1", name: 'John', age: 27 },
      { id: "per2", name: 'Vivian', age: 25 },
      { id: "per3", name: 'Juliet', age: 20 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Vivian', age: 25 },
        { name: 'Juliet', age: 24 }
      ],
      showPerson: false
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons })
  }

  showPersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

  deletePerson = (personIndex) => {
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, i) => {
              return <Person name={person.name} age={person.age} key={person.id} changed={(event) => this.nameChangedHandler(event, person.id)} click={() => this.deletePerson(i)} />
            })
          }
        </div>
      )
      style.backgroundColor = 'red';
    }

    const assignedClasses = []

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.showPersonHandler} >Click Me!</button>
        {persons}
      </div>
    );
  }
}

export default App;
