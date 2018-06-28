import React, { Component } from 'react';
import Person from './components/Person';

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

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person, i) => {
              return <Person name={person.name} age={person.age} key={person.id} changed={(event) => this.nameChangedHandler(event, person.id)} click={() => this.deletePerson(i)} />
            })
          }
        </div>)
      /*  persons = (
         <div>
           <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
           <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} />
           <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler.bind(this, "Emeka")}> and my Hobbies are: Swimming, dancing</Person>
         </div>
       ) */
    }
    return (
      <div className="App">
        <button onClick={this.showPersonHandler} >Click Me!</button>
        {persons}

      </div>
    );
  }
}

export default App;
