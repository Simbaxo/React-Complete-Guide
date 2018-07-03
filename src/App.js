import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Andres', age: 28},
      { name: 'Max', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // this.state.persons[0].name = 'Andresito' // DONT DO THIS
    this.setState( {
      persons: [
        { name: 'Andresito', age: 28},
        { name: newName, age: 29},
        { name: 'Stephanie', age: 27}
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Money')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Lisa')}>
            My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')) // What JSX boils down too.. simply just JS
  }
}

export default App;
