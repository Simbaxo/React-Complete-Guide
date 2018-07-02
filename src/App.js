import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name='Andres' age='29' />
        <Person name='Max' age='27'>My Hobbies: Racing</Person>
        <Person name='Steph' age='25' />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')) // What JSX boils down too.. simply just JS
  }
}

export default App;
