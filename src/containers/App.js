import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'

export const AuthContext = React.createContext(false)

class App extends PureComponent {
  constructor(props) {
    super(props) 
    console.log('[App.js] Inside Contructor', props)
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Andres', age: 28},
        { id: 'vasdf1', name: 'Max', age: 29},
        { id: 'asdf11', name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMOunt()')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState)
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UDPATE App.js] Inside componentWillUpdate()', nextProps, nextState)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UDPATE App.js] Inside getDerivedStateFromProps()', nextProps, prevState)
    return prevState
  }

  getSnapshotBeforeUpdate() {
    console.log('[UDPATE App.js] Inside getSnapshotBeforeUpdate()')
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()')
  }

  // state = {
  //   persons: [
  //     { id: 'asfa1', name: 'Andres', age: 28},
  //     { id: 'vasdf1', name: 'Max', age: 29},
  //     { id: 'asdf11', name: 'Stephanie', age: 26}
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex]) // alt to code above

    person.name = event.target.value 

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice() // same as line below
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  } 

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1
      }
    } )
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log('[App.js] Inside render()')

    let persons = null

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonsHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
        {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')) // What JSX boils down too.. simply just JS
  }
}

export default withClass(App, classes.App);
