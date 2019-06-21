import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }


   switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // Dont do this: personsState.persons[0].name = "Maximilian";
    this.setState({
      persons:[
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
    ],
    otherState: 'some other value',
    showPersons: false 
    })
  }

   nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
    ],

    })
  }

  togglePersonsHandler =() => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };  
    let persons = null;

    if (this.state.showPersons) {
      persons= (
        <div>
          {this.state.persons.map(person =>{
            return <Person 
            name={person.name} 
            age={person.age}/>
          })}
       
        </div>
      );
    }
    return (
      <div className="App">
      <h1>React - The Complete Guide (incl Hooks, React Router, Redux)</h1>
      {/* Not recommended - inefficent */}
      <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
     {persons} 
    </div>
  );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'));  
}
}
export default App;